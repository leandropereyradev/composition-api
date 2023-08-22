<template>
  <h3 v-if="isLoading">Espere, por favor</h3>

  <h2 v-else>Usuarios</h2>

  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users?.length > 0">
    <user-list :users="users" v-slot="{ user }">
      <h3>{{ user.first_name }} {{ user.last_name }}</h3>
      <span>{{ user.email }}</span>
    </user-list>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Página: {{ currentPage }}</span>
</template>

<script>
import useUsers from '@/composables/useUsers'
import UserList from '@/components/UserList.vue'

export default {
  setup() {
    const { currentPage, errorMessage, isLoading, users, nextPage, prevPage } = useUsers()

    return {
      currentPage,
      errorMessage,
      isLoading,
      users,
      nextPage,
      prevPage,

      // Tambien se puede utilizar la desestructuración del useUsers ya que retorna los atrivutos que hemos usado en el template
      //...useUsers()
      //El inconveniente es que, si hay mas cosas, no sabremos de donde vienen los atributos usados en el template
    }
  },

  components: { UserList }

}
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}
</style>