<template>
  <footer>
    <p> Gracias por ver la página</p>
    <p> La cantidad de contadores son [XX]</p>
  </footer>
</template>

<script>
export default {
  name: 'VueFooter'

}
</script>

<style>
* {
  padding: 0;
}

 footer {
  background-color: blue;
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: center;
  padding: 1em 0;
  position: absolute;
  width: 100%;
  bottom: 0;
}

</style>
