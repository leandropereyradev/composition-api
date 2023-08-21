import axios from "axios";
import { ref } from "vue";

const usePokemonSearch = (pokemonId = "1") => {
  const pokemon = ref();
  const isLoading = ref(false);
  const errorMessage = ref();

  const searchPokemon = async (id) => {
    if (!id) return;

    isLoading.value = true;
    pokemon.value = null;

    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      pokemon.value = data;

      errorMessage.value = null;
    } catch (error) {
      errorMessage.value = "No se puede cargar el Pokemon";
    }

    isLoading.value = false;
  };

  searchPokemon(pokemonId);

  return {
    errorMessage,
    isLoading,
    searchPokemon,
    pokemon,
  };
};

export default usePokemonSearch;
