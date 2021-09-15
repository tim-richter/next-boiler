import React from 'react';
import { Children } from '@types';

interface Props {
  children: Children;
}

const Main = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default Main;
