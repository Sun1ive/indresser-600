<template>
  <main>
    <app-catalog></app-catalog>
    <app-aboutus></app-aboutus>
    <app-coats></app-coats>
    <app-coatCategory></app-coatCategory>
  </main>
</template>

<script>
import catalog from './catalog'
import aboutus from './aboutus'
import coats from './coats'
import coatCategory from './category/coats'
  export default {
    components: {
      'app-catalog': catalog,
      'app-aboutus': aboutus,
      'app-coats': coats,
      'app-coatCategory': coatCategory,
    }
  }
</script>

<style scoped lang="stylus"></style>