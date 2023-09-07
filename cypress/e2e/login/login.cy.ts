export {};

const root = process.env.CYPRESS_BASE_URL || 'localhost:3000';

describe('EncoderForm', () => {
  let shortUrl = '';
  beforeEach(() => {
    cy.visit(root);
  });

  it('should handle login', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/login')
    })
    cy.get('input[area-label="Email"]').type('example@test.de');

    cy.contains('Login').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  });
});
