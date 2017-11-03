<template>
  <main>
    <app-catalog></app-catalog>
    <app-aboutus></app-aboutus>
    <app-coats></app-coats>
    <app-coatCategory></app-coatCategory>
    <app-jackets></app-jackets>
  </main>
</template>

<script>
import catalog from './catalog'
import aboutus from './aboutus'
import coats from './coats'
import coatCategory from './category/coats'
import jackets from './category/jackets'
  export default {
    components: {
      'app-catalog': catalog,
      'app-aboutus': aboutus,
      'app-coats': coats,
      'app-coatCategory': coatCategory,
      'app-jackets': jackets,
    }
  }
</script>

<style scoped lang="stylus"></style>