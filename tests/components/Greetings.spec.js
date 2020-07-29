/// <reference types="cypress" />
import { mount } from 'cypress-vue-unit-test'
import Greetings from '../../src/components/Greetings.vue'
import AddTodo from '../../src/components/AddTodo.vue'
import FilterTodo from '../../src/components/FilterTodo.vue'
// import Todo from '../../src/components/Todo.vue'

describe('Mount', () => {
  it('Greeting component', () => {
    mount(Greetings)
    cy.get('[data-testid=title]').should('exist')
  })

  it('AddTodo component', () => {
    mount(AddTodo)
    cy.get('h3').should('exist')
    cy.get('[type="text"]').type('hello John')
    cy.get('[type="submit"]').click()
  })

  it('FilterTodo component', () => {
    mount(FilterTodo)
    cy.get('select').select('3')
  })

  // it('Todo component', () => {
  //   // mount(Todo)
  // })
})
