<template>
  <h1>Counter View</h1>
  <h2>{{ counter }}</h2>

  <button @click="increase">+ 1</button>
  <button @click="decrease">- 1</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Counter',
  setup() {
    const counter = ref(5)

    return {
      counter,

      decrease: () => counter.value--,
      increase: () => counter.value++,
    }
  }

}
</script>

<style></style>