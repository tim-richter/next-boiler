import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import theme from './theme.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex'],
    flex: [1],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-between',
    ],

    gap: theme.space,
    paddingTop: theme.space,
    paddingBottom: theme.space,
    paddingLeft: theme.space,
    paddingRight: theme.space,
    marginTop: theme.space,
    marginBottom: theme.space,
    marginLeft: theme.space,
    marginRight: theme.space,

    width: ['100vw', '100%'],
    height: ['100vh', '100%'],
    overflow: ['hidden'],
    border: theme.border,
    borderRadius: theme.borderRadius,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight,
    fontSize: theme.fontSize,
    lineHeight: theme.lineHeight,
    textAlign: ['center'],

    boxShadow: theme.boxShadow,
    transition: theme.transition,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
  },
});

const colorModeProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: theme.color,
    background: theme.color,
  },
});

// eslint-disable-next-line import/prefer-default-export
export const sprinkles = createSprinkles(
  responsiveProperties,
  colorModeProperties,
);
