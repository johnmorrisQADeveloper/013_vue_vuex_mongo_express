import BasePage from './basePage.js'

export default class HomePage extends BasePage {
  constructor(){
    super()
  }
  newButton = '.mb-2 > .v-btn__content'
  
  getNewItemButton(){
    return cy.get(this.newButton)
  }
}

export default homePage
