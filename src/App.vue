<template>
  <div id="app">
    <Playfield :pairs="8" />
  </div>
</template>

<script>
import Playfield from './components/Playfield.vue'

export default {
  name: 'App',
  components: {
    Playfield
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
