<template>
  <div>
    <Tutorial />
    <contadores />
  </div>
</template>

<script>
import Contadores from '~/components/Contadores.vue'

export default {
  name: 'IndexPage',
  components: { Contadores }
}
</script>
