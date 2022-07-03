/**
 * Tests the list items use cases.
 */

describe('List items view', () => {
  const { URLS } = Cypress.env();

  const shouldHaveArticles = () => cy.get('article').should('have.length.above', 0);

  beforeEach(() => {
    const urlSearchQuery = new URLSearchParams();
    urlSearchQuery.set('search', 'perro');
    cy.visit(`${URLS.LIST_ITEMS}?${urlSearchQuery}`);
  });

  it('can navigate with breadcrumbs.', () => {
    const startingURL = cy.url();
    cy.get('nav').find('a').first().click();
    const currentURL = cy.url();
    expect(currentURL).not.eq(startingURL);
    shouldHaveArticles();
  });

  it('can navigate with articles.', () => {
    const startingURL = cy.url();
    cy.get('article').find('a').first().click();
    const currentURL = cy.url();
    expect(currentURL).not.eq(startingURL);
    shouldHaveArticles();
  });
});
