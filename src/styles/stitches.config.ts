import { createStitches } from '@stitches/react';
import { modularScale } from 'polished';
import {
  blue,
  gray,
  green,
  indigo,
  orange,
  pink,
  purple,
  red,
  violet,
} from '@radix-ui/colors';

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const fontSizeScale = createScale(1.3, 13);

export const { styled, getCssText, css } = createStitches({
  theme: {
    fonts: {
      system:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    colors: {
      primary: purple.purple9,
      secondary: indigo.indigo9,

      ...gray,
      ...blue,
      ...red,
      ...green,
      ...orange,
      ...violet,
      ...pink,
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
    },
    fontSizes: {
      0: fontSizeScale(0),
      1: fontSizeScale(1),
      2: fontSizeScale(2),
      3: fontSizeScale(3),
      4: fontSizeScale(4),
      5: fontSizeScale(5),
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    bs: (value: 'medium' | 'big') => {
      if (value === 'medium') return { boxShadow: '2px 4px 5px black' };

      return { boxShadow: '5px 10px 8px black' };
    },
  },
});
