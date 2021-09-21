import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { ParsedUrlQuery } from 'querystring';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import config from '@config';
import { SSRConfig } from 'next-i18next';
import { SEOMeta } from '@customTypes';

/* eslint-disable @typescript-eslint/no-unsafe-return */

export interface BaseReturnProps {
  hostname?: string;
  preview: true | null;
  previewRef: string | null;
}

interface BaseServerSideHandlerContext {
  req: IncomingMessage & { cookies: NextApiRequestCookies };
  res: ServerResponse;
  url: string;
  query: ParsedUrlQuery;
  isPreview: boolean;
  previewData: string | null;
  language: string;
  hostname?: string;
}

/**
 * Provides basic handling of getServerSideProps Logic.
 * Custom Logic can be inserted by using the customLogic parameter. Falls back to 404.
 * @param customLogic Function to fetch or otherwise return custom props to the page.
 */
export const baseGetServerSideHandler =
  async <T extends Record<string, any>>(
    customLogic: (
      context: BaseServerSideHandlerContext,
    ) => Promise<GetServerSidePropsResult<T>> | GetServerSidePropsResult<T>,
  ) =>
  async (
    ctx: GetServerSidePropsContext<ParsedUrlQuery>,
  ): Promise<GetServerSidePropsResult<T & BaseReturnProps>> => {
    const { query, req, res, resolvedUrl, preview, previewData, locale } = ctx;

    const previewRef = typeof previewData === 'string' ? previewData : null;

    const languageWithFallback = locale || config.i18n.defaultLocale;

    const result = await customLogic({
      req,
      res,
      url: resolvedUrl,
      query,
      isPreview: !!preview,
      previewData: previewRef,
      language: languageWithFallback,
    });

    if ('redirect' in result) {
      return result.redirect as any;
    }

    if ('notFound' in result) {
      return result.notFound as any;
    }

    if ('props' in result) {
      return {
        props: {
          ...result.props,
          language: languageWithFallback,
          preview: preview || null,
          previewRef,
        },
      };
    }

    return { notFound: true };
  };

interface BaseStaticHandlerContext {
  params?: ParsedUrlQuery;
  isPreview: boolean;
  previewData: string | null;
  language: string;
}

interface BaseStaticHandlerConfig {
  translationNamespaces?: string[];
  meta: SEOMeta;
  revalidate?: number;
}

interface BaseStaticHandlerReturn {
  language: string;
  preview: true | null;
  previewRef: string | null;
  translations: SSRConfig;
  meta: SEOMeta;
}

type ICustomLogic<T extends unknown> = (
  context: BaseStaticHandlerContext,
) => Promise<GetStaticPropsResult<T>> | GetStaticPropsResult<T>;

/**
 * Provides basic handling of getStaticProps Logic.
 * @param props Additional props that should be added to the response for example revalidate
 * @param customLogic Custom Fetch Logic
 */
export const baseStaticHandler =
  <T extends Record<string, any> | undefined>(
    props: BaseStaticHandlerConfig,
    customLogic?: ICustomLogic<T>,
  ) =>
  async (
    ctx: GetStaticPropsContext,
  ): Promise<
    T extends Record<string, any>
      ? GetStaticPropsResult<T & BaseStaticHandlerReturn>
      : GetStaticPropsResult<BaseStaticHandlerReturn>
  > => {
    const { preview, previewData, locale, params } = ctx;

    const previewRef = typeof previewData === 'string' ? previewData : null;
    const languageWithFallback = locale || config.i18n.defaultLocale;

    const translations = await serverSideTranslations(
      languageWithFallback,
      props?.translationNamespaces || ['common'],
    );

    if (customLogic) {
      const result = await customLogic({
        params,
        isPreview: !!preview,
        previewData: previewRef,
        language: languageWithFallback,
      });

      if ('redirect' in result) {
        return result.redirect as any;
      }

      if ('notFound' in result && result.notFound === true) {
        return {
          notFound: true,
        };
      }

      if ('props' in result) {
        return {
          props: {
            ...result.props,
            language: languageWithFallback,
            preview: preview || null,
            previewRef,
            ...translations,
            meta: props.meta,
          },
          revalidate: props?.revalidate || false,
        } as any;
      }

      return { notFound: true };
    }

    return {
      props: {
        language: languageWithFallback,
        preview: preview || null,
        previewRef,
        ...translations,
        meta: props.meta,
      },
      revalidate: props?.revalidate || false,
    } as any;
  };
