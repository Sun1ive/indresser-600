<template>
  <main>
    <app-catalog></app-catalog>
    <app-aboutus></app-aboutus>
    <app-coats></app-coats>
  </main>
</template>

<script>
import catalog from './catalog'
import aboutus from './aboutus'
import coats from './coats'
  export default {
    components: {
      'app-catalog': catalog,
      'app-aboutus': aboutus,
      'app-coats': coats,
    }
  }
</script>

<style scoped lang="stylus"></style>