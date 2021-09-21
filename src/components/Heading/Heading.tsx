import React from 'react';
import { RecipeVariants, WithChildren } from '@customTypes';
import { styledHeading } from '@components/Heading/Heading.css';

type Props = WithChildren<RecipeVariants<typeof styledHeading>>;

const Heading = ({ size, children, as }: Props) => {
  const Component = as || 'h1';

  return (
    <Component
      className={styledHeading({
        size,
        as,
      })}
    >
      {children}
    </Component>
  );
};

export default Heading;
