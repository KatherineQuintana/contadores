<template>
  <section>
    <h1>
      "Nombre del contador"
    </h1>
    <h1 v-if="counter >= 0 && counter<= 20">
      Tienes {{ counter }}
    </h1>
    <h1 v-else-if="counter < 0">
      <span style="color: red;"> Estas bajo el limite </span>
    </h1>
    <h1 v-else-if="counter > 20">
      <span style="color: red;"> Estas sobre el limite </span>
    </h1>
    <div class="counterButton">
      <button class="buttonAction" :disabled="isDisabledLess" @click="actionLess">
        Disminuir
      </button>
      <button class="buttonAction" :disabled="isDisabledAdd" @click="actionAdd">
        Aumentar
      </button>
      <img src="https://user-images.githubusercontent.com/89401079/172986563-07b063ce-0b65-499c-8830-20ab1bd03b7b.png">
    </div>
  </section>
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

<style>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  margin-left: 100px;
  margin-right: 50px;
}

.buttonAction {
  border-radius: 30px;
  width: 80px;
  height: 20px;
}

img {
  width: 10%;
  height: 30%;
}

</style>
