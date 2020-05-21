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
        :expanded.sync="expanded"
        item-key="title"
        show-expand
      >
        <template v-slot:item.completed="{ item }">
          <v-chip :color="getColor(item.completed)" dark>{{ item.completed }}</v-chip>
        </template>

        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Expandable Table</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-switch v-model="singleExpand" label="Single expand" class="mt-2"></v-switch>
          </v-toolbar>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length"><p>Title: {{ item.title }}</p> <p>ID: {{item._id}}</p>  </td>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['fetchTodos']),
    getColor (completed) {
      if (completed) return 'red'
      else return 'green'
    }
  },
  data () {
    return {
      expanded: [],
      singleExpand: false,
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
