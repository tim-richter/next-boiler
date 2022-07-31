import { ReactNode } from 'react';
import { RuntimeFn } from '@vanilla-extract/recipes/dist/declarations/src/types';
import { NextSeoProps } from 'next-seo/lib/types';

export type Children = ReactNode;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithChildren<T = any> = T & { children?: Children };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RecipeVariants<T extends RuntimeFn<any>> = Parameters<T>[0];

export interface SEOMeta extends NextSeoProps {
  title: string;
  description: string;
}
