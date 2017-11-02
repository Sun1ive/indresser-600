<template>
  <main>
    <app-catalog></app-catalog>
    <app-aboutus></app-aboutus>
  </main>
</template>

<script>
import catalog from './catalog'
import aboutus from './aboutus'
  export default {
    components: {
      'app-catalog': catalog,
      'app-aboutus': aboutus,
    }
  }
</script>

<style scoped lang="stylus"></style>