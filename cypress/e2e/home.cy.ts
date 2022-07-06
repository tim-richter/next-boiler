describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('should have a header', () => {
    cy.get('header').should('be.visible');
  });

  it('should have a main', () => {
    cy.get('main').should('be.visible');
  });

  it('should have a footer', () => {
    cy.get('footer').should('be.visible');
  });

  it('should not have a11y violations', () => {
    cy.checkA11y();
  });
});

export {};
