/// <reference types="cypress" />

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'cypress-react-unit-test'

import PageHeader from '../../src/components/PageHeader'

describe('PageHeader component', () => {
  const baseCss = '/__root/src/assets/styles/global.css'
  const indexCss = '/__root/src/components/PageHeader/styles.css'
  
  it('should render', () => {
    const title = 'Que incrível que você quer dar aula.'
    const description = 'O primeiro passo é preencher esse formulário de inscrição'
    mount(
      <Router>
        <PageHeader
          title={title}
          description={description}
        />
      </Router>,
      {
        stylesheets: [baseCss, indexCss]
      }
    )

    cy.get('.page-header').as('header')
    cy.get('@header').find('strong').as('title')
    cy.get('@header').children().find('p').as('description')

    cy.get('@title').should('have.text', title)
    cy.get('@description').should('have.text', description)

    cy.get('@header').then(($element) => {
      expect($element.css('background-color')).to.be.equal('rgb(130, 87, 229)')
      expect($element.css('flex-direction')).to.be.equal('column')
    })
  });
});