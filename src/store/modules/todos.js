import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: (state) => state.todos
}

const actions = {
  async fetchTodos ({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('SET_TODOS', response.data)
  }
}

const mutations = {
  SET_TODOS: (state, todos) => (state.todos = todos)
}

export default {
  state,
  getters,
  actions,
  mutations
}
