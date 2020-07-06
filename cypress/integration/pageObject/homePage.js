module.exports.homePage = {
  navigate() {
    return cy.visit('http://localhost:8080/')
  },
  title() {
    return cy.title()
  },
  newItemButton() {
    return cy.get('.mb-2 > .v-btn__content')
  },
  dialogTitle() {
    return cy.get('.headline')
  },
  inputBox() {
    return cy.get('.inputTodo', {timeout: 10000})
  },
  saveButton() {
    return cy.get('button:nth-child(3) > span')
  }
}