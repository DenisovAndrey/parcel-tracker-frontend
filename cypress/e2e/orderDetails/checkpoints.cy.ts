export {};

const root = process.env.CYPRESS_BASE_URL || 'localhost:3000';
const originalUrl = 'https://en.wikipedia.org/wiki/Computer';
describe('EncoderForm', () => {
  let shortUrl = '';
  beforeEach(() => {
    cy.visit(root);
  });

  it('should handle navigation to checkpoints and back navigation', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/login')
    })
    cy.get('input[area-label="Email"]').type('example@test.de');

    cy.contains('Login').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })

    cy.get('a[aria-label*="Order"]').first().click();


    cy.location().should((location) => {
      expect(location.pathname).to.contains('/checkpoints')
    })

    cy.contains('Checkpoints').should('exist');

    cy.contains('All orders').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  });
});
