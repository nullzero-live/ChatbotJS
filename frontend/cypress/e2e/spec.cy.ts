// A test test, test test test.

describe('Index has intended HTML element', () => {
 
  it('finds the root div', () => {
    cy.visit('http://localhost:5173/');
    cy.get('#root').as('rootDiv');
    cy.get('@rootDiv').should('be.visible');
  })
})