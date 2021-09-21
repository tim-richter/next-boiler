import { createGlobalTheme } from '@vanilla-extract/css';
import { modularScale } from 'polished';
import colors from 'tailwindcss/colors';

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}px`;

const spaceScale = createScale(1.4, 4);
const fontSizeScale = createScale(1.3, 13);
const lineHeightScale = createScale(1.25, 24);
const borderRadiusScale = createScale(1.5, 4);

const theme = createGlobalTheme(':root', {
  space: {
    none: '0',
    0: spaceScale(0),
    1: spaceScale(1),
    2: spaceScale(2),
    3: spaceScale(3),
    4: spaceScale(4),
    5: spaceScale(5),
    6: spaceScale(6),
    7: spaceScale(7),
    8: spaceScale(8),
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  border: {
    normal: `1px solid ${colors.purple['300']}`,
  },
  borderRadius: {
    0: borderRadiusScale(0),
    1: borderRadiusScale(1),
    2: borderRadiusScale(2),
    3: borderRadiusScale(3),
    4: borderRadiusScale(4),
    5: borderRadiusScale(5),
    full: '99999px',
  },
  fontSize: {
    0: fontSizeScale(0),
    1: fontSizeScale(1),
    2: fontSizeScale(2),
    3: fontSizeScale(3),
    4: fontSizeScale(4),
    5: fontSizeScale(5),
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    black: '900',
  },
  lineHeight: {
    0: lineHeightScale(0),
    1: lineHeightScale(1),
    2: lineHeightScale(2),
    3: lineHeightScale(3),
    4: lineHeightScale(4),
    5: lineHeightScale(5),
  },
  boxShadow: {
    light: `0 1px 0 ${colors.coolGray[50]}`,
  },
  transition: {
    fast: 'all 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  },
  color: {
    white: '#f5f5f5',
    black: '#141414',
    transparent: 'transparent',

    'gray-50': colors.coolGray[50],
    'gray-100': colors.coolGray[100],
    'gray-200': colors.coolGray[200],
    'gray-300': colors.coolGray[300],
    'gray-400': colors.coolGray[400],
    'gray-500': colors.coolGray[500],
    'gray-600': colors.coolGray[600],
    'gray-700': colors.coolGray[700],
    'gray-800': colors.coolGray[800],
    'gray-900': colors.coolGray[900],

    'green-50': colors.emerald[50],
    'green-100': colors.emerald[100],
    'green-200': colors.emerald[200],
    'green-300': colors.emerald[300],
    'green-400': colors.emerald[400],
    'green-500': colors.emerald[500],
    'green-600': colors.emerald[600],
    'green-700': colors.emerald[700],
    'green-800': colors.emerald[800],
    'green-900': colors.emerald[900],

    'blue-50': colors.blue[50],
    'blue-100': colors.blue[100],
    'blue-200': colors.blue[200],
    'blue-300': colors.blue[300],
    'blue-400': colors.blue[400],
    'blue-500': colors.blue[500],
    'blue-600': colors.blue[600],
    'blue-700': colors.blue[700],
    'blue-800': colors.blue[800],
    'blue-900': colors.blue[900],

    'yellow-50': colors.amber[50],
    'yellow-100': colors.amber[100],
    'yellow-200': colors.amber[200],
    'yellow-300': colors.amber[300],
    'yellow-400': colors.amber[400],
    'yellow-500': colors.amber[500],
    'yellow-600': colors.amber[600],
    'yellow-700': colors.amber[700],
    'yellow-800': colors.amber[800],
    'yellow-900': colors.amber[900],

    'red-50': colors.red[50],
    'red-100': colors.red[100],
    'red-200': colors.red[200],
    'red-300': colors.red[300],
    'red-400': colors.red[400],
    'red-500': colors.red[500],
    'red-600': colors.red[600],
    'red-700': colors.red[700],
    'red-800': colors.red[800],
    'red-900': colors.red[900],

    'purple-50': colors.violet[50],
    'purple-100': colors.violet[100],
    'purple-200': colors.violet[200],
    'purple-300': colors.violet[300],
    'purple-400': colors.violet[400],
    'purple-500': colors.violet[500],
    'purple-600': colors.violet[600],
    'purple-700': colors.violet[700],
    'purple-800': colors.violet[800],
    'purple-900': colors.violet[900],

    'pink-50': colors.pink[50],
    'pink-100': colors.pink[100],
    'pink-200': colors.pink[200],
    'pink-300': colors.pink[300],
    'pink-400': colors.pink[400],
    'pink-500': colors.pink[500],
    'pink-600': colors.pink[600],
    'pink-700': colors.pink[700],
    'pink-800': colors.pink[800],
    'pink-900': colors.pink[900],
  },
});

export default theme;
