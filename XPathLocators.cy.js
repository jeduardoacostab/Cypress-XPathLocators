describe('XPathLocators', () => {

it('Find No. of products', () => {
    cy.visit("https://www.panamericana.com.co/")
    cy.xpath("//ul[@class='vtex-list-context-0-x-list vtex-list-context-0-x-list--home__black-grid--x6-one']/li").should('have.length',4)

})

it('Chained Path', () => {
    cy.visit("https://www.panamericana.com.co/")
    cy.xpath("//ul[@class='vtex-list-context-0-x-list vtex-list-context-0-x-list--home__black-grid--x6-one']").xpath("./li").should('have.length',4)

})

})