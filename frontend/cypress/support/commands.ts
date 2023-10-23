// Custom command to check visibility

Cypress.Commands.add('checkVisibility', (selector) => {
    cy.get(selector).should('be.visible');
  });

  /*
// Usage
cy.checkVisibility('#app');
});
*/