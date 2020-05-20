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
  }
}

const mutations = {
  SET_TODOS: (state, todos) => (state.todos = todos),
  NEW_TODO: (state, todo) => state.todos.unshift(todo),
  REMOVE_TODO: (state, _id) => (state.todos = state.todos.filter(todo => todo._id !== _id))
}

export default {
  state,
  getters,
  actions,
  mutations
}
