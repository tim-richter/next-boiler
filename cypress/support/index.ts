/// <reference types="cypress" />

import './commands';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getBySel(value: string): Chainable;
      getBySelLike(value: string): Chainable;
    }
  }
}
