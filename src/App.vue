<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>

  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import header from './components/header'
import footer from './components/footer'
import main from './components/main'

  export default {
    components: {
      'app-toolbar': toolbar,
      'app-header': header,
      'app-main': main,
      'app-footer': footer
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
