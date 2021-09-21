import { globalStyle } from '@vanilla-extract/css';
import theme from '@styles/theme.css';

globalStyle('body, body *, body *::before, body *::after', {
  boxSizing: 'border-box',
  fontFamily: theme.fontFamily.body,
});

globalStyle('body', {
  backgroundColor: theme.color.black,
  color: theme.color.white,
  height: '100vh',
  padding: 0,
  margin: 0,
});

globalStyle('#__next', {
  height: '100%',
});

globalStyle('main', {
  height: '100%',
});
