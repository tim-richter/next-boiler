import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

// eslint-disable-next-line import/prefer-default-export
export const styledSelect = recipe({
  base: style([
    sprinkles({
      background: 'white',
      paddingY: 1,
      paddingX: 1,
      borderRadius: 2,
      margin: 1,
      fontSize: 1,
      lineHeight: 1,
    }),
    {
      border: 'none',
      fontFamily: 'inherit',
      cursor: 'pointer',
    },
  ]),
});

export const styledSelectLabel = recipe({
  base: style([
    sprinkles({
      fontSize: 1,
    }),
  ]),
});
