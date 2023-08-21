<template>
  <div class="home">
    <h1>reactive vs Ref</h1>
    <h2>{{ ironman }}</h2>
    <h2>{{ hulk }}</h2>

    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Cambiar Estados</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'HomeView',

  setup() {
    const ironman = ref({ name: 'Tony', age: 50 })

    //Reactive SÓLO funciona con OBJETOS
    const hulk = reactive({ name: 'Bruce', age: 45 })

    // const ironmanIsAlive = reactive(false)
    let ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value

      //No cambian siquiera cambiando la constante a una variable LET
      // ironmanIsAlive = !ironmanIsAlive
      // ironmanIsAlive = reactive(!ironmanIsAlive)
    }

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,

      changeStatus,

      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 50
      },

      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 55
      },
    }
  }
}
</script>
