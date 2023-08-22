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
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const currentTab = ref('all')

    return {
      currentTab,

      //Getters
      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
      pending: computed(() => store.getters['pendingTodos']),

      //Getters como fonciones con parámetro
      getTodoByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),

      //Mutations
      toggleTodo: (id) => store.commit('toggleTodo', id)

    }
  }

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