<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <app-header></app-header>
    <app-main></app-main>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import header from './components/header'
import main from './components/main'


  export default {
    components: {
      'app-toolbar': toolbar,
      'app-header': header,
      'app-main': main,
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
body
  font-family Gilroy-ExtraBold, Arial, Helvetica, sans-serif

.container
  padding 0
</style>
