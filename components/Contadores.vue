<template>
  <div>
    <h1 v-if="counter >= 0 && counter<= 20">
      "Nombre del contador" tiene {{ counter }}
    </h1>
    <h1 v-else-if="counter < 0">
      <span style="color: red;"> Estas bajo los limites de 0 </span>
    </h1>
    <h1 v-else-if="counter > 20">
      <span style="color: red;"> Estas sobre los limites de 20 </span>
    </h1>
    <button :disabled="isDisabledAdd" @click="actionAdd">
      Aumentar
    </button>
    <button :disabled="isDisabledLess" @click="actionLess">
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
    },
    isDisabledLess () {
      return this.counter < 0
    },

    isDisabledAdd () {
      return this.counter > 20
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
