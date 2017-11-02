<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <app-header></app-header>

  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import header from './components/header'


  export default {
    components: {
      'app-toolbar': toolbar,
      'app-header': header,
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
