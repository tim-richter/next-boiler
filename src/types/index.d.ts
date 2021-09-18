import { NextSeoProps } from 'next-seo/lib/types';
import React from 'react';
import { RuntimeFn } from '@vanilla-extract/recipes/dist/declarations/src/types';

export type Children = React.ReactNode;

export type WithChildren<T = any> = T & { children?: Children };

export type RecipeVariants<T extends RuntimeFn<any>> = Parameters<T>[0];

export interface SEOMeta extends NextSeoProps {
  title: string;
  description: string;
}
