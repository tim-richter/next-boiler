import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '@styles/sprinkles.css';

// eslint-disable-next-line import/prefer-default-export
export const styledHeading = recipe({
  base: sprinkles({
    fontWeight: 'bold',
  }),
  variants: {
    size: {
      small: sprinkles({
        fontSize: 1,
      }),
      medium: sprinkles({
        fontSize: 2,
      }),
      large: sprinkles({
        fontSize: 3,
      }),
    },
    as: {
      h1: sprinkles({
        fontSize: 5,
      }),
      h2: sprinkles({
        fontSize: 4,
      }),
      h3: sprinkles({
        fontSize: 3,
      }),
      h4: sprinkles({
        fontSize: 2,
      }),
      h5: sprinkles({
        fontSize: 1,
      }),
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
