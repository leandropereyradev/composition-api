import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");

  return {
    currentTab,

    //Getters
    all: computed(() => store.getters["allTodos"]),
    completed: computed(() => store.getters["completedTodos"]),
    pending: computed(() => store.getters["pendingTodos"]),

    //Getters como fonciones con parámetro
    getTodoByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),

    //Mutations
    toggleTodo: (id) => store.commit("toggleTodo", id),
  };
};

export default useTodos;
