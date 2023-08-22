<template>
  <h1>Aprendiendo Slots</h1>

  <button @click="openModal">Abrir Modal</button>

  <modal v-if="isModalOpen" @on:close="closeModal" title="Hola Mundo">
    <template v-slot:header>
      <h2>Titulo</h2>
    </template>

    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>

    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet consectetur blanditiis in obcaecati nulla, pariatur a deserunt porro tempore at
        itaque!
        Voluptates, necessitatibus. Aspernatur?
      </p>
    </template>

    <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'

export default {
  setup() {
    const isModalOpen = ref(false)

    return {
      isModalOpen,

      openModal: () => isModalOpen.value = true,
      closeModal: () => isModalOpen.value = false
    }
  },

  components: {
    Modal
  }
}
</script>

<style scoped></style>