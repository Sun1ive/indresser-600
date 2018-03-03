<template>
  <footer class="">
    <v-container fluid class="footer">
      <v-layout align-center>
        <v-flex xs12 sm2 md2 lg1>
          <ul class="socials">
            <li><a href="https://facebook.com/indresser.clothing" target="_blank" class="fa fa-facebook"></a></li>
            <li><a href="https://instagram.com/indresser" target="_blank" class="fa fa-instagram"></a></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm6 md6 lg8>
          <ul class="footerMenu">
            <li v-for="(item, i) in menu" :key="i" v-html="item.title" v-scroll-to="item.scrollTo"></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm4 mg3 lg3>
          <ul class="phone">
            <li><a href="tel:+380980202092">+380 98 020 2092</a></li>
            <li><a href="tel:+380730202090">+380 73 020 2090</a></li>
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
            title: 'Длинное пальто', scrollTo: '.coats'
          },
          {
            title: 'Жилет прямой', scrollTo: '.jacket'
          },
          {
            title: 'Пальто легкое', scrollTo: '.shortCoats'
          },
          {
            title: 'О нас', scrollTo: '.about'
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
     font-size responsive .7rem 1rem
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
    font-size responsive 1rem 1.3rem
    transition .4s ease-in-out
    &:hover
      transition .4s ease-in-out
      color red
  li
    transition .4s ease-in-out
    &:hover
      transition .4s ease-in-out
      color red

.footerMenu
  color #fff
  font-size responsive 1rem 1.3rem
  font-family Gilroy-Light, Arial, Helvetica, sans-serif
  li
    cursor pointer
  
@media (max-width 600px)
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

// @media (max-width 450px)
//   .socials
//   .footerMenu
//   .phone
//     width 40vh
</style>