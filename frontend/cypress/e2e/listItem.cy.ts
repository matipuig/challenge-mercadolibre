/**
 * Tests the list items use cases.
 */

describe('List item view', () => {
  const { URLS, MOCKS } = Cypress.env();
  const { ITEM } = URLS;
  const { ITEM_ID } = MOCKS;

  beforeEach(() => {
    const url = ITEM.replace(':id', ITEM_ID);
    cy.visit(url);
  });

  it('can buy.', () => {
    cy.get('button[name="buy"]').first().click();
    cy.get('[aria-modal=true]');
  });
});
