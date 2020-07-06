/// <reference types="Cypress" />

import {homePage} from './pageObject/homePage'
describe('Todo Homepage ', () => {
  it('title home page is todovuex', () => {
    homePage.navigate()
    homePage.title().should('be', 'todovuex')
  })
  it('add new item', () => {
    homePage.newItemButton().click()
    homePage.dialogTitle().should('be', 'New Item')
    homePage.inputBox().type('hello')
    homePage.saveButton().click()
  })
})