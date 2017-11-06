<template>
  <header>
    <div class="wrapper">
      <v-container fluid class="header">
        <v-layout class="LC" column justify-end>
          <h1>Верхняя одежда Осень-Зима 2017/2018</h1>
          <p>Вы ищете женственное и удобное платье или модное пальто? Тогда выбирайте наши практичные и стильные женские вещи</p>
        </v-layout>
        <v-layout class="LC" align-center>
          <div class="myButton" @click="drawer = true">Смотреть коллекцию</div>
          <!-- <a href="https://coats.indresser.com/coats.pdf" target="_blank" class="myButton" >Смотреть коллекцию</a> -->
        </v-layout>
        <div class="mouse"></div>
        <div class="mOne"></div>
        <div class="mTwo"></div>
      </v-container>
      
    <v-dialog v-model="drawer" max-width="350">
      <app-catalog @closeForm="closeForm"></app-catalog>
    </v-dialog>
    </div>
  </header>
</template>

<script>
import catalog from './modals/getCatalog'
  export default {
    components: {
      'app-catalog': catalog
    },
    data () {
      return {
        drawer: false,
      }
    },
    methods: {
      closeForm () {},
    }
  }
</script>

<style scoped lang="stylus">
.header
  background url('/static/img/header/header.png')
  background-repeat no-repeat
  background-position-x right
  min-height 1000px
  position relative
  .mouse
    background-image url('/static/img/mouse.png')
    position absolute
    left 17%
    bottom 20%
    width 15px
    height 40px
  h1
    font-size 4rem
    margin 1rem 0
  .LC
    &:nth-child(1)
      min-height 400px
    &:nth-child(2)
      min-height 200px
    .myButton
      color #000 !important
      &:hover
        color #fff !important

@media (max-width: 1440px)
  .header
    background-image url('/static/img/header/header1.png')
    h1
      font-size 3rem
      text-align center
    p
      text-align center
      width 70%
      margin 0 auto
    .LC
      &:nth-child(2)
        justify-content center

@media (max-width 1350px)
  .header
    background-image url('/static/img/header/gg.png')
    min-height 789px


@media (max-width 1300px)
  .header
    background-image url('/static/img/header/header1280.png')
    min-height 750px

@media (max-width: 1024px)
  .header
    background-image url('/static/img/header/header3.png')


@media (max-width 600px)
  .header
    background-image url('/static/img/header/header2.png')
    min-height 600px
    color #fff
    h1
      font-size 2rem
    .mouse
      display none

</style>