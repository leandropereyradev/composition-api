<template>
  <h1>Lista de tareas de Thanos</h1>
  <h4>Pendientes: {{ pending.length }}</h4>

  <hr>

  <button :class="{ 'active': currentTab === 'all' }" @click="currentTab = 'all'">
    Todas las tareas
  </button>

  <button :class="{ 'active': currentTab === 'pending' }" @click="currentTab = 'pending'">
    Pendientes
  </button>

  <button :class="{ 'active': currentTab === 'completed' }" @click="currentTab = 'completed'">
    Completados
  </button>

  <div>
    <ul>
      <li v-for="todo in getTodoByTab" :key="todo.id" :class="{ 'completed': todo.completed }"
        @dblclick='toggleTodo(todo.id)'>
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="isOpen = true">Crear ToDo</button>

  <modal v-if="isOpen" @on:close="isOpen = false">
    <template v-slot:header>
      <h1>Nueva Tarea</h1>
    </template>

    <template v-slot:body>
      <form @submit.prevent="createTodo(newTodoText), isOpen = false">
        <input type="text" placeholder="Nueva tarea" v-model="newTodoText">

        <br>
        <br>

        <button type="submit">Crear</button>
      </form>
    </template>
  </modal>
</template>

<script>
import useTodos from '@/composables/useTodos'
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
  setup() {
    const {
      createTodo,
      currentTab,
      getTodoByTab,
      pending,
      toggleTodo,
    } = useTodos()

    return {
      currentTab,

      //Getters
      pending,

      //Getters como fonciones con parámetro
      getTodoByTab,

      //Mutations
      createTodo,
      toggleTodo,

      isOpen: ref(false),
      newTodoText: ref('')

    }
  },

  components: { Modal }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 350px;
  text-align: left;
}

li {
  cursor: pointer;
  margin-bottom: 20px;
}

.active {
  background-color: #2c3e50;
  color: aliceblue;
}

.completed {
  text-decoration: line-through;
}
</style>