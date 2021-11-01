/// <reference types="cypress" />

describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/')
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
