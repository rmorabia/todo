<template>
<div
  :style="{ backgroundColor: changeTodoColor }"
  v-bind:class="{done: todo.done}"
  @click="isDone"
  @mouseover="showDeleteButton"
  @mouseleave="hideDeleteButton"
>
  {{ todo.text}}
  <img
    @click="deleteTodo"
    src="../assets/delete.svg"
    class="deleteButton"
    v-show="deleteButton"
  />
</div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: Object,
    getRandomColor: Function,
    deleteTodo: Function
  },
  data () {
    return {
      deleteButton: false
    }
  },
  computed: {
    changeTodoColor () {
      return this.getRandomColor()
    }
  },
  methods: {
    isDone () {
      this.todo.done = !this.todo.done
    },
    showDeleteButton () {
      this.deleteButton = true
    },
    hideDeleteButton () {
      this.deleteButton = false
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
  opacity: 0.5;
}

.deleteButton {
  color: white;
}

</style>
