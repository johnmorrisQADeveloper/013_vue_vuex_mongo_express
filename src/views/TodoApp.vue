<template>
  <div class="container">
    <add-todo-vue />
    <h1>Todos</h1>
    <todo-vue />
  </div>
</template>

<script>
import TodoVue from '../components/Todo.vue'
import AddTodoVue from '../components/AddTodo.vue'

export default {
  components: {
    TodoVue,
    AddTodoVue
  }
}
</script>

<style lang="scss" scoped>
</style>
