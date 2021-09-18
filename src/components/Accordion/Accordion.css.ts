import { keyframes, style } from '@vanilla-extract/css';
import { sprinkles } from '@styles/sprinkles.css';
import theme from '@styles/theme.css';

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const accordion = style([
  {
    maxWidth: 800,
  },
  sprinkles({
    borderRadius: 3,
    width: '100%',
    background: 'gray-600',
  }),
]);

export const item = style([
  sprinkles({
    overflow: 'hidden',
    marginTop: 1,
  }),
  {
    selectors: {
      '&:first-child': {
        marginTop: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      },

      '&:last-child': {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
      },

      '&:focus-within': {
        position: 'relative',
        zIndex: 1,
        boxShadow: `0 0 0 2px ${theme.color['gray-200']}`,
      },
    },
  },
]);

export const header = sprinkles({
  margin: 'none',
  display: 'flex',
});

export const trigger = style([
  sprinkles({
    paddingY: 3,
    paddingX: 2,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 1,
    lineHeight: 1,
    color: 'purple-700',
    background: 'black',
    boxShadow: 'light',
  }),
  {
    ':hover': {
      background: theme.color['gray-200'],
    },
  },
]);

export const content = style([
  sprinkles({
    overflow: 'hidden',
    fontSize: 1,
    color: 'gray-700',
    background: 'white',
  }),
  {
    selectors: {
      '&[data-state="open"]': {
        animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
      },
    },
  },
]);

export const contentText = sprinkles({
  paddingX: 3,
  paddingY: 4,
});

export const chevron = style([
  sprinkles({
    color: 'purple-700',
    transition: 'fast',
  }),
  {
    selectors: {
      [`${content}[data-state=open] &`]: {
        transform: 'rotate(180deg)',
      },
    },
  },
]);
