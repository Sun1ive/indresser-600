<template>
  <footer class="wrapper">
    <v-container fluid class="footer">
      <v-layout align-center>
        <v-flex xs12 sm6 lg1>
          <ul class="socials">
            <li><a href="#" target="" class="fa fa-facebook"></a></li>
            <li><a href="#" target="" class="fa fa-instagram"></a></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm6 lg8>
          <ul class="footerMenu">
            <li>Пальто</li>
            <li>Жилеты</li>
            <li>Пальто</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </v-flex>
        <v-flex xs12 sm6 lg3>
          <ul class="phone">
            <li>+380 98 020 2092</li>
            <li>+380 98 020 2092</li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
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
  color #fff
  justify-content space-around
  a
    text-decoration none
    color #fff
    font-size 2rem

.footerMenu
  color #fff
  font-size 1.1rem
  font-family Gilroy-Light, Arial, Helvetica, sans-serif
</style>