/// <reference types="Cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open todo app', () => {
  cy.visit('http://localhost:8080/')
})

Then('I see {string} in the title', (title) => {
  cy.title().should('be', title)
})

Then('I click the new item', () => {
  cy.get('.mb-2 > .v-btn__content').click()
})

Then('I click the new  {string}', (text) => {
  cy.get('#input-55').type(text)
  cy.get('button:nth-child(3) > span').click()
})