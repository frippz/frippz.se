describe('Check feeds', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('TEST_URL'))
  })

  it('Find and test feed URLs', () => {
    cy.get('html head link[rel="alternate"]').each((el) => {
      cy.wrap(el)
        .invoke('attr', 'href')
        .then((href) => {
          cy.request(href).its('status').should('eq', 200)
        })
    })
  })
})
