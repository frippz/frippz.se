describe('Check vital page elements', () => {
  /**
   * Create an array of all entries from sitemap.xml
   */
  let urls = []

  before(async () => {
    // getch the sitemap content
    const response = await cy.request(`${Cypress.env('TEST_URL')}/sitemap.xml`)

    // convert sitemap xml body to an array of urls
    urls = Cypress.$(response.body)
      // according to the sitemap.xml spec,
      // the url value should reside in a <loc /> node
      // https://www.google.com/sitemaps/protocol.html
      .find('loc')
      // map to a js array
      .toArray()
      // get the text of the <loc /> node
      .map((el) => el.innerText)
  })

  beforeEach(() => {
    urls.forEach(cy.visit)
  })

  it('Find the header main title', () => {
    cy.get('#header h1')
  })

  it('Find main navigation', () => {
    cy.get('#main-nav li').should('have.length', 3)
  })

  it('Find footer – external links', () => {
    cy.get('#footer .external-links li').should('have.length', 5)
  })

  it('Find footer – feed links', () => {
    cy.get('#footer .feeds li').should('have.length', 3)
  })
})
