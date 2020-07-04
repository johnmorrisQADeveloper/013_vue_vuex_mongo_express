/// <reference types="Cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open todo app', () => {
  cy.visit('http://localhost:8080/')
})

Then('I see {string} in the title', (title) => {
  cy.title().should('be', title)
})
