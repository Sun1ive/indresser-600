<template>
  <v-app>
    <app-toolbar></app-toolbar>

  </v-app>
</template>

<script>
import toolbar from './components/toolbar'


  export default {
    components: {
      'app-toolbar': toolbar
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

</style>
