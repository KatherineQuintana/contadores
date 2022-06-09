<template>
  <div>
    <form @submit.prevent="addName">
      <input
        v-model.trim="nameCount"
        type="text"
        maxlength="20"
        placeholder="Nombre del contador"
      >
      <button type="submit">
        Ingresar
      </button>
      <p>{{ nameCount }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NameContador',

  data () {
    return {
      nameCount: ''
    }
  },

  methods: {
    addName () {
      if (this.nameCount.trim() === '') {
        alert('debe ingresar un nombre')
      }
      this.nameCount = ''
    }
  }
}
</script>
