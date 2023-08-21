<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3> {{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </template>
</template>

<script>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import usePokemonSearch from '../composables/usePokemonSearch'

export default {
  setup() {
    const route = useRoute()

    const { errorMessage, isLoading, searchPokemon, pokemon, } = usePokemonSearch(route.params.id)

    //Necesitamos un watch porque, al estar utilizando un keep-alive, no vuelve a tomar el parámetro del URL. Si no estuviera el keep-alive, la página refrescaría, se desmontaría y al volver a hacer la búsqueda, vuelve a tomar el parámetro de la URL
    watch(() => route.params.id, (/*value, prevValue*/) => searchPokemon(route.params.id))

    return {
      errorMessage,
      isLoading,
      pokemon,
    }
  }

}
</script>