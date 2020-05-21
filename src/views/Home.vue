<template>
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        Todos
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        dense
        :headers="headers"
        :items="allTodos"
        :items-per-page="5"
        class="elevation-1"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['fetchTodos'])
  },
  data () {
    return {
      search: '',
      todos: [
        // {
        //   title: 'a',
        //   completed: false
        // },
        // {
        //   title: 'b',
        //   completed: false
        // }
      ],
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Completed', value: 'completed' }
      ]
    }
  },
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters(['allTodos'])
  },
  async created () {
    await this.fetchTodos()
    this.loading = false
  }
}
</script>
