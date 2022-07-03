/**
 * Tests the searching use cases.
 */

describe('Search', () => {
  const { URLS } = Cypress.env();

  beforeEach(() => {
    cy.visit(URLS.MAIN);
  });

  it('executes search by pressing enter.', () => {
    cy.get('input[name="search"]').type('perro{enter}');
    cy.get('article').should('have.length.above', 0);
  });

  it('executes search by clicking search button.', () => {
    cy.get('input[name="search"]').type('perro');
    cy.get('button').first().dblclick();
    cy.get('article').should('have.length.above', 0);
  });

  it('does not bring results with weird query.', () => {
    cy.get('input[name="search"]').type('0123456789012345678901234567890123456789');
    cy.get('button').first().dblclick();
    cy.get('article').should('have.length', 0);
  });
});
