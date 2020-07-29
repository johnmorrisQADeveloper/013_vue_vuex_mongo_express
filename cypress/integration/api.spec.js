describe('api tests', () => {

  before(function() {
    cy.visit('http://localhost:8080/todoapp')
    cy.window().then( win => {
      win.app.$store.dispatch('removeALlTodos')
      // win.app.$store.dispatch('addTodo','this is from the store')
    })
  })

  it('GET- todos', () => {
    cy.request({
      url: 'http://localhost:3000/todos',
      method: 'GET'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(0)
      expect(response).to.have.property('headers')
    })
  })

  it('GET- spy todos', () => {
    cy.server()
    cy.route('GET', '/todos').as('todos')
    cy.visit('http://localhost:8080/todoapp')
    cy.wait('@todos').its('response.body').should('have.length', 0)
  })

  it('GET- stub todos', () => {
    cy.server()
    cy.route('GET', '/todos', 'fixture:sampleTodo').as('todos')
    cy.visit('http://localhost:8080/todoapp')
    cy.wait('@todos').its('response.body').should('have.length', 1)
  })
})
