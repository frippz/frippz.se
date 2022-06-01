describe('Check vital page elements on home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4000/')
  })

  it('Find the header main title', () => {
    cy.get('#header h1').should('have.text', 'frippz.se')
  })

  it('Find main navigation', () => {
    cy.get('#main-nav li').should('have.length', 3)
  })

  it('Find footer', () => {
    cy.get('#footer')
  })

  it('Find footer – external links', () => {
    cy.get('#footer .external-links li').should('have.length', 5)
  })

  it('Find footer – feed links', () => {
    cy.get('#footer .feeds li').should('have.length', 3)
  })
})
