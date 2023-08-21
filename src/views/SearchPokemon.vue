<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number" placeholder="Número del Pokemon" v-model="pokemonId" ref="txtSearchId">
  </form>
  <br>
  <span>Precione Enter para buscar?</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Pokemon Search',

  setup() {
    const router = useRouter()

    const pokemonId = ref(1)
    const txtSearchId = ref()

    onActivated(() => {
      // txtSearchId.value.focus()
      //El select, no sólo hace foco, sino también selecciona lo escrito dentro del input
      txtSearchId.value.select()
    })

    return {
      pokemonId,
      txtSearchId,

      onSubmit: () => {
        router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
      }
    }
  }
}
</script>

<style></style>