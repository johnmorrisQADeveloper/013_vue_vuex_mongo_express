/// <reference types="Cypress" />
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
const { homePage } = require('../pages/homePage')

Given('I open todo app', () => {
  homePage.navigate()
})

Then('I see {string} in the title', (title) => {
  homePage.title().should('be', title)
})

Then('I click the new item', () => {
  homePage.newItemButton().click()
})

Then('I click the new  {string}', (text) => {
  homePage.inputBox().type(text)
  homePage.saveButton().click()
})