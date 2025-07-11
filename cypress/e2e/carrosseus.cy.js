describe('Carrossel na Home', () => {
  beforeEach(() => {
    cy.visit('index.html') // Ou apenas '/' se estiver servindo localmente via dev server
  })

  it('deve mostrar o primeiro slide por padrão', () => {
    cy.get('#carouselExampleFade .carousel-item').first().should('have.class', 'active')
  })

  it('deve avançar para o próximo slide ao clicar no botão "próximo"', () => {
    cy.get('.carousel-control-next').click()
    cy.get('#carouselExampleFade .carousel-item')
      .eq(1)
      .should('have.class', 'active')
  })

  it('deve voltar ao slide anterior ao clicar no botão "anterior"', () => {
    cy.get('.carousel-control-next').click() // vai pro slide 2
    cy.get('.carousel-control-prev').click() // volta pro slide 1
    cy.get('#carouselExampleFade .carousel-item')
      .first()
      .should('have.class', 'active')
  })

})

describe('Carrossel na sb-n', () => {
  beforeEach(() => {
    cy.visit('pages/sobre-nos.html') // Ou apenas '/' se estiver servindo localmente via dev server
  })

  it('deve mostrar o primeiro slide por padrão', () => {
    cy.get('#carouselExampleFade .carousel-item').first().should('have.class', 'active')
  })

  it('deve avançar para o próximo slide ao clicar no botão "próximo"', () => {
    cy.get('.carousel-control-next').click()
    cy.get('#carouselExampleFade .carousel-item')
      .eq(1)
      .should('have.class', 'active')
  })

  it('deve voltar ao slide anterior ao clicar no botão "anterior"', () => {
    cy.get('.carousel-control-next').click() // vai pro slide 2
    cy.get('.carousel-control-prev').click() // volta pro slide 1
    cy.get('#carouselExampleFade .carousel-item')
      .first()
      .should('have.class', 'active')
  })

})
describe('Carrossel na noticias', () => {
  beforeEach(() => {
    cy.visit('pages/noticias.html') // Ou apenas '/' se estiver servindo localmente via dev server
  })

  it('deve mostrar o primeiro slide por padrão', () => {
    cy.get('#carouselExampleFade .carousel-item').first().should('have.class', 'active')
  })

  it('deve avançar para o próximo slide ao clicar no botão "próximo"', () => {
    cy.get('.carousel-control-next').click()
    cy.get('#carouselExampleFade .carousel-item')
      .eq(1)
      .should('have.class', 'active')
  })

  it('deve voltar ao slide anterior ao clicar no botão "anterior"', () => {
    cy.get('.carousel-control-next').click() // vai pro slide 2
    cy.get('.carousel-control-prev').click() // volta pro slide 1
    cy.get('#carouselExampleFade .carousel-item')
      .first()
      .should('have.class', 'active')
  })

})

describe('Carrossel na salao', () => {
  beforeEach(() => {
    cy.visit('pages/salao.html') // Ou apenas '/' se estiver servindo localmente via dev server
  })

  it('deve mostrar o primeiro slide por padrão', () => {
    cy.get('#carouselExampleFade .carousel-item').first().should('have.class', 'active')
  })

  it('deve avançar para o próximo slide ao clicar no botão "próximo"', () => {
    cy.get('.carousel-control-next').click()
    cy.get('#carouselExampleFade .carousel-item')
      .eq(1)
      .should('have.class', 'active')
  })

  it('deve voltar ao slide anterior ao clicar no botão "anterior"', () => {
    cy.get('.carousel-control-next').click() // vai pro slide 2
    cy.get('.carousel-control-prev').click() // volta pro slide 1
    cy.get('#carouselExampleFade .carousel-item')
      .first()
      .should('have.class', 'active')
  })

})
