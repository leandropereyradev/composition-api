import { createStore } from "vuex";

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
      return state.todos.filter((todo) => !todo.completed);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
