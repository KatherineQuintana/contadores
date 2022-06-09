<template>
  <div>
    <Tutorial />
    <NameContador />
    <!--     <contadores /> -->
  </div>
</template>

<script>
import NameContador from '../components/NameContador.vue'
/* import Contadores from '~/components/Contadores.vue' */

export default {
  name: 'IndexPage',
  components: { /*  Contadores,  */NameContador }
}
</script>
