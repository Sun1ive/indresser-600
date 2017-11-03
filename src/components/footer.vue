<template>
  <div class="wrapper">
    <v-container fluid class="footer">
      <v-layout align-center>
        <v-flex xs12 sm6 lg1>
          <ul class="socials">
            <li><a href="#" class="fa fa-facebook"></a></li>
            <li><a href="#" class="fa fa-facebook"></a></li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.footer
  background-color #202020
  .layout
    min-height 100px
ul
  list-style none
  display flex
  padding-left 0
  a
    text-decoration none
    color #fff
    font-size 2rem

.socials
  justify-content space-around
</style>