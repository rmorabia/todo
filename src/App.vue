<template>
  <div>
    <h1 :style="{ backgroundColor: changeHeadingColor }">Add Some Todos!</h1>
    <Todo
      v-for="todo in todos"
      :key="todo.key"
      :todo="todo"
      :getRandomColor="getRandomColor"
      :deleteTodo="deleteTodo"
    ></Todo>
    <form
      @submit.prevent="addTodo"
      autocomplete="off"
      :style="{ backgroundColor: changeFormColor }"
    >
      <input name="todo" type="text" placeholder="Type your todos here...">
    </form>
    <footer>Built by Radhika Morabia.</footer>
  </div>
</template>

<script>
import Todo from './components/Todo'
import 'normalize.css'

export default {
  name: 'App',
  components: {
    Todo
  },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (e) {
      this.todos.push({
        text: e.path[0][0].value,
        done: false,
        key: e.path[0][0].value + this.todos.length
      })
      document.querySelector('input').value = ''
    },
    getRandomColor () {
      const r = (Math.floor(Math.random() * 156) + 90)
      const g = (Math.floor(Math.random() * 156) + 90)
      const b = (Math.floor(Math.random() * 156) + 90)

      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    deleteTodo (selectedTodo) {
      this.todos.splice(this.todos.indexOf(selectedTodo), 1)
    }
  },
  computed: {
    changeHeadingColor () {
      return this.getRandomColor()
    },
    changeFormColor () {
      return this.getRandomColor()
    }
  },
  created: function () {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  },
  updated: function () {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
</script>

<style>
/*
=================
Full-Page Styling
=================
*/

html {
  min-height: 100%;
  min-width: 100%;
  font-family: 'Nova Flat', cursive;
}

/*
============
Spacing
============
*/

div,
form,
input,
h1 {
  height: 10vw;
  font-size: 5vw;
  color: #fff;
  margin: 0;
  transition: all .5s ease;
  line-height: 10vw;
}

h1 {
  padding: 0 10px;
  font-weight: normal;
}

span {
  padding: 0 10px;
}

input {
  padding: 0 10px;
}

/*
===================
Input & Placeholder
===================
*/

input,
input:focus {
  background-color: transparent;
  border: none;
  outline-width: 0;
  box-sizing: border-box;
  width: 90vw;
  font-family: 'Nova Flat', cursive;
}

::placeholder {
  color: #ffffff;
}

/*
=============
Delete Button
=============
*/

img {
  float: right;
  height: 10vw;
  line-height: 10vw;
}

/*
======
Footer
======
*/

footer {
  height: 10vw;
  font-size: 4vw;
  line-height: 10vw;
  color: #32b643;
  margin: 0;
  background-color: #cbedd0;
  text-align: center;
}

a {
  color: #32b643;
  text-decoration: none;
}

a:hover,
a:active {
  color: #32b643;
  text-decoration: underline;
}
</style>
