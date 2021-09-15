import { NextSeoProps } from 'next-seo/lib/types';

export type Children = React.ReactNode;

export type WithChildren<T = any> = T & { children?: Children };

export interface SEOMeta extends NextSeoProps {
  title: string;
  description: string;
}
