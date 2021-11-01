/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

describe('Classes endpoint', () => {
  it('should POST new professor', () => {
    cy.api({
      method: 'POST',
      url: `${Cypress.config().apiUrl}/classes`,
      body: {
        "name": "Prof Agilizei",
        "avatar": "https://github.com/agilizei.png",
        "whatsapp": "11987654321",
        "bio": "lorem ipsum",
        "subject": "Química",
        "cost": 100,
        "schedule": [
          {
            "week_day": 0,
            "from": "08:00",
            "to": "09:00"
          }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.length(1)
      expect(response.body[0])
        .to.have.property('class_id')
    })
  });
});