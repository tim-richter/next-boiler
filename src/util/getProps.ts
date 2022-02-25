import { IncomingMessage, ServerResponse } from 'http';
import { ParsedUrlQuery } from 'querystring';
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import config from '@config';
import { SEOMeta } from '@customTypes';

/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */

export interface BaseReturnProps {
  hostname?: string;
  language: string;
  preview: true | null;
  previewRef: string | null;
  meta?: SEOMeta;
}

interface BaseGetServerSideHandlerConfig {
  translationNamespaces?: string[];
  meta?: SEOMeta;
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
 *
 * @param props Additional props
 * @param customLogic Function to fetch or otherwise return custom props to the page.
 */
export const baseGetServerSideHandler =
  <T extends Record<string, any>, I extends SEOMeta>(
    props: BaseGetServerSideHandlerConfig,
    customLogic: (context: BaseServerSideHandlerContext) => Promise<
      GetServerSidePropsResult<
        | T
        | {
            meta: I;
          }
      >
    >,
  ) =>
  async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<{ data: T; meta: I }>> => {
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
      return {
        redirect: result.redirect,
      };
    }

    if ('notFound' in result && result.notFound) {
      return {
        notFound: true,
      };
    }

    if ('props' in result) {
      const resolvedProps = await result.props;

      const translations = await serverSideTranslations(
        languageWithFallback,
        props?.translationNamespaces || ['common'],
      );

      const meta = {
        ...props.meta,
        ...(resolvedProps?.meta ? resolvedProps.meta : []),
      };

      return {
        props: {
          data: result.props,
          language: languageWithFallback,
          preview: preview || null,
          previewRef,
          meta,
          ...translations,
        },
      } as any;
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

interface BaseStaticHandlerReturn extends SSRConfig {
  language: string;
  preview: true | null;
  previewRef: string | null;
  meta: SEOMeta;
}

type ICustomLogic<T> = (
  context: BaseStaticHandlerContext,
) => Promise<GetStaticPropsResult<T>> | GetStaticPropsResult<T>;

/**
 * Provides basic handling of getStaticProps Logic.
 *
 * @param props Additional props that should be added to the response (e.g. revalidate)
 * @param customLogic Custom Fetch Logic
 */
export const baseStaticHandler =
  <C extends ICustomLogic<any>>(
    props: BaseStaticHandlerConfig,
    customLogic?: C,
  ) =>
  async (
    ctx: GetStaticPropsContext,
  ): Promise<
    GetStaticPropsResult<
      {
        data: C extends ICustomLogic<infer R> ? R : null;
      } & BaseStaticHandlerReturn
    >
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
        return {
          redirect: result.redirect,
        };
      }

      if ('notFound' in result && result.notFound) {
        return {
          notFound: true,
        };
      }

      if ('props' in result) {
        return {
          props: {
            data: result.props,
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
        data: null,
        language: languageWithFallback,
        preview: preview || null,
        previewRef,
        ...translations,
        meta: props.meta,
      },
      revalidate: props?.revalidate || false,
    } as any;
  };
