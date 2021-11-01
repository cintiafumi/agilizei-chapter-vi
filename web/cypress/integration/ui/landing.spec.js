/// <reference types="cypress" />

const widths = [1200, 1090]

widths.forEach(width => {
  describe(`Landing Page - ${width}px`, () => {
    beforeEach(() => {
      cy.visit('/')
      cy.viewport(width, 900)
      cy.log('Largura: ', width)
    })
  
    it('should navigate to Classes registration', () => {
      cy.get('div a.give-classes').click()
      cy.url().should('contain', 'give-classes')
    })
  
    it('should navigate to Professors search', () => {
      cy.get('div a.study').click()
      cy.url().should('contain', 'study')
    })
  })
})
