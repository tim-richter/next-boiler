describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
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
});

export {};
