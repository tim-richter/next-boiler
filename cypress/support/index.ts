/// <reference types="cypress" />

import './commands';
import 'cypress-axe';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getBySel(value: string): Chainable;
    }
  }
}
