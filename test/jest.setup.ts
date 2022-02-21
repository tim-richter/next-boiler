import dotenv from 'dotenv';
import '@vanilla-extract/css/disableRuntimeStyles';
import { toHaveNoViolations } from 'jest-axe';
import nock from 'nock';

dotenv.config({ path: '.env.test' });

expect.extend(toHaveNoViolations);

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

window.scroll = jest.fn();
window.alert = jest.fn();
