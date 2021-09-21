import React from 'react';
import { Children } from '@customTypes';

interface Props {
  children: Children;
}

const Main = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default Main;
