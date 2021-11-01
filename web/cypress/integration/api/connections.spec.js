/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

describe('Connections endpoint', () => {
  it('should GET all connections', () => {
    cy.api({
      method: 'GET',
      url: `${Cypress.config().apiUrl}/connections`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.duration).lt(20)
      
      expect(response.body)
        .to.have.property('total')
        .to.be.a('number').greaterThan(4)
      
      expect(response.body.total)
        .an('number')
        .satisfy((totalValue) => totalValue >= 4)
      
      expect(response.headers)
        .to.have.property('content-type')
        .an('string')
        .equal('application/json; charset=utf-8')
    })
  });
});