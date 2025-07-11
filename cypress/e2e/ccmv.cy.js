describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sotnaslegit.github.io/conselho-comunitario-mv/index.html')
  })

  it('se troca as paginas', () => {
    cy.visit('https://sotnaslegit.github.io/conselho-comunitario-mv/index.html')
   
    cy.get(':nth-child(2) > .nav-link').click()
    cy.contains('Em 15/04/1981').should('exist')

    cy.get(':nth-child(3) > .nav-link').click()
    cy.contains('Jiu Jitsu').should('exist')

    cy.get(':nth-child(4) > .nav-link').click()
    cy.contains('WhatsApp').should('exist')

  })
})