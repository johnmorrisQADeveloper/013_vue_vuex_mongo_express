/// <reference types="Cypress" />

import {homePage} from './pageObject/homePage'
describe('Todo Homepage ', () => {
  it('title home page is todovuex', () => {
    cy.visit('http://localhost:8080/')
    cy.title().should('be', 'todovuex')
  })
  it('add new item', () => {
    cy.get('.mb-2 > .v-btn__content').click()
    cy.get('.headline').should('have.text', 'New Item')
    cy.get('.inputTodo', {timeout: 10000}).type('hello')
    cy.get('button:nth-child(3) > span').click()
  })
})