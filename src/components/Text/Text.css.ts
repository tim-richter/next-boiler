import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '@styles/sprinkles.css';

// eslint-disable-next-line import/prefer-default-export
export const styledText = recipe({
  base: sprinkles({
    fontWeight: 'regular',
  }),
  variants: {
    size: {
      small: sprinkles({
        fontSize: 0,
      }),
      medium: sprinkles({
        fontSize: 1,
      }),
      large: sprinkles({
        fontSize: 2,
      }),
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
