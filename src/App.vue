<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>

    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
const DEFAULT_LAYOUT = 'default'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || DEFAULT_LAYOUT) + '-layout'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $background-color;
}
</style>
