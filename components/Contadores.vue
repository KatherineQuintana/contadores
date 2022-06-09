<template>
  <div>
    <h1>"Nombre del contador" tiene {{ counter }}</h1>
    <button @click="actionAdd">
      Aumentar
    </button>
    <button @click="actionLess">
      Disminuir
    </button>
  </div>
</template>

<script>

export default {
  name: 'ContadorVuex',

  computed: {
    counter () {
      return this.$store.getters.getCounter
    }
  },

  methods: {
    actionAdd () {
      this.$store.dispatch('add')
    },
    actionLess () {
      this.$store.dispatch('less')
    }
  }
}
</script>
