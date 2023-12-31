import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    todos: [
      {
        id: "1",
        text: "Recolectar las piedras del infinito",
        completed: false,
      },
      {
        id: "2",
        text: "Piedra del alma",
        completed: true,
      },
      {
        id: "3",
        text: "Piedra de Poder",
        completed: true,
      },
      {
        id: "4",
        text: "Piedra de Realidad",
        completed: false,
      },
      {
        id: "5",
        text: "Conseguir nuevos secuases competentes",
        completed: false,
      },
    ],
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      // state: usa es state de este store
      //getter: usa los getters de este store ej.: getters.allTodos
      //rootState: es el state global de la aplicación

      return state.todos.filter((todo) => !todo.completed);
    },

    allTodos: (state, getters, rootState) => {
      return state.todos;
    },

    completedTodos: (state, getters, rootState) => {
      return state.todos.filter((todo) => todo.completed);
    },

    getTodosByTab: (state, getters, rootState) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;

        case "pending":
          return getters.pendingTodos;

        case "completed":
          return getters.completedTodos;
      }
    },
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);

      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    },

    createTodo(state, text = "") {
      if (text.length <= 1) return;

      state.todos.push({
        id: uuidv4(),
        text,
        completed: false,
      });
    },
  },
  actions: {},
  modules: {},
});
