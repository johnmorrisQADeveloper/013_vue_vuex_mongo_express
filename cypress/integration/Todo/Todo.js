/// <reference types="Cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../Pages/homePage'
const homePage = new HomePage()

Given('I open todo app', () => {
  homePage.navigate('/')
})

Then('I see {string} in the title', (title) => {
  cy.title().should('be', title)
})

Then('I click the new item', () => {
  // homePage().newItemButton().click()
  // cy.get('.mb-2 > .v-btn__content').click()
})

Then('I click the new  {string}', (text) => {
  cy.get('#input-55').type(text)
  cy.get('button:nth-child(3) > span').click()
})