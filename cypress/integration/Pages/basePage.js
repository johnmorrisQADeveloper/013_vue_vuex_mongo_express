export default class BasePage {
  baseUrl = "http://localhost:8080/"

  navigate(path) {
    cy.visit(this.baseUrl + path)
  }
  getPageTitle() {
    return cy.title()
  }
}