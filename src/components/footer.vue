<template>
  <footer class="wrapper">
    <v-container fluid class="footer">
      <v-layout align-center>
        <v-flex xs12 sm3 md1 lg1>
          <ul class="socials">
            <li><a href="#" target="" class="fa fa-facebook"></a></li>
            <li><a href="#" target="" class="fa fa-instagram"></a></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm6 lg8>
          <ul class="footerMenu">
            <li v-for="(item, i) in menu" :key="i" v-html="item.title" v-scroll-to="item.scrollTo"></li>
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
    data () {
      return {
        menu: [
          {
            title: 'Пальто', scrollTo: '.coats'
          },
          {
            title: 'Жилеты', scrollTo: '.jacket'
          },
          {
            title: 'Пальто', scrollTo: '.coats'
          },
          {
            title: 'О нас', scrollTo: '.about'
          },
          {
            title: 'Контакты', scrollTo: '.coats'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
.footer
  background-color #202020
  .phone
     font-size responsive
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
    font-size responsive

.footerMenu
  color #fff
  font-size responsive
  font-family Gilroy-Light, Arial, Helvetica, sans-serif
  li
    cursor pointer
    transition .4s ease-in-out
    &:hover
      transition .4s ease-in-out
      color red
  
@media (max-width 700px)
  .footer
    .layout
      flex-direction column
      justify-content center
      align-items center
      .socials
        width 50vh
        margin 1rem 0
      .footerMenu
        width 50vh
      .phone
        width 50vh
</style>