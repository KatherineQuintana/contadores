<template>
  <div>
    <VueHeader />
    <NameContador />
    <contadores />
    <VueFooter />
  </div>
</template>

<script>
import NameContador from '../components/NameContador.vue'
import VueHeader from '../components/VueHeader.vue'
import Contadores from '~/components/Contadores.vue'
import VueFooter from '~/components/VueFooter.vue'

export default {
  name: 'IndexPage',
  components: { Contadores, NameContador, VueHeader, VueFooter }
}
</script>

<style>

 body {
   background-color: aquamarine;
   text-align: center;
   position: relative;
   min-height: 100vh;
 }

</style>
