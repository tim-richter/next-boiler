import React from 'react';
import { WithChildren } from '@types';

const Container = ({ children }: WithChildren): JSX.Element => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};

export default Container;
