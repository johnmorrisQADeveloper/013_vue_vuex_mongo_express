import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: (state) => state.todos,
  getIndex: (state) => state.todos.length
}

const actions = {
  async fetchTodos ({ commit }) {
    const response = await axios.get('http://localhost:3000/todos')
    commit('SET_TODOS', response.data)
  },
  async addTodo ({ commit }, title) {
    const response = await axios.post('http://localhost:3000/todos', {
      title, completed: false
    })
    commit('NEW_TODO', response.data)
  },
  async deleteTodo ({ commit }, _id) {
    await axios.delete(`http://localhost:3000/todos/${_id}`)
    commit('REMOVE_TODO', _id)
  },
  async filterTodo ({ commit }, number) {
    const response = await axios.get(`http://localhost:3000/todos/count/${number}`)
    commit('SET_TODOS', response.data)
  },
  async updateTodo ({ commit }, updateTodo) {
    console.log(updateTodo)
    console.log(`http://localhost:3000/todos/${updateTodo._id}`)
    const response = await axios.patch(`http://localhost:3000/todos/${updateTodo._id}`, updateTodo)
    commit('UPDATE_TODOS', response.data)
    // const responses = await axios.get('http://localhost:3000/todos')
    // commit('SET_TODOS', response.data)
  }
}

const mutations = {
  SET_TODOS: (state, todos) => (state.todos = todos),
  NEW_TODO: (state, todo) => state.todos.unshift(todo),
  REMOVE_TODO: (state, _id) => (state.todos = state.todos.filter(todo => todo._id !== _id)),
  UPDATE_TODOS: (state, updateTodo) => {
    const index = state.todos.findIndex(todo => todo._id === updateTodo._id)
    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo)
    }
    console.log(state.todos)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
