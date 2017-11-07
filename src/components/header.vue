<template>
  <header>
    <div class="wrapper">
      <v-container fluid class="header">
        <v-layout class="LC" align-center>
          <v-flex sm10 lg5>
            <h1>Верхняя одежда Осень-Зима 2017/2018</h1>
            <p>Иногда так и хочется надеть что-то сногсшибательное, что бы на тебя все обращали внимание и восторгались. У нас такое есть!</p>
          </v-flex>
        </v-layout>
        <div class="mouse"></div>
        <div class="mOne"></div>
        <div class="mTwo"></div>
        <div class="mThree"></div>
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
      closeForm () {
        this.drawer = false;
      },
    }
  }
</script>

<style scoped lang="stylus">
.header
  background url('/static/img/header/1.png')
  background-repeat no-repeat
  background-position-x right
  min-height 1000px
  position relative
  h1
    font-size responsive 3rem 4rem
  .mouse
    background-image url('/static/img/mouse.png')
    position absolute
    left 17.3%
    bottom 20%
    width 15px
    height 40px
  .mOne
  .mTwo
  .mThree
    background-image url('/static/img/right.svg')
    width 20px
    height 20px
    position absolute
    left 17.15%
    bottom 17%
    transform rotateZ(90deg)
  .mTwo
    bottom 15%
    opacity .7
  .mThree
    bottom 13%
    opacity .3
  h1
    font-size responsive 3rem 4rem
    margin 1rem 0
  .LC
    align-items center
    min-height 800px
    .myButton
      color #000 !important
      &:hover
        color #fff !important

@media (max-width: 1440px)
  .header
    h1
      font-size responsive 2.5rem 2.6rem
      text-align center
    p
      text-align center
      width 70%
      margin 0 auto
    .LC
      min-height 790px

@media (max-width 1350px)
  .header
    background-image url('/static/img/header/2.png')
    min-height 790px

@media (max-width: 1280px)
  .header
    background-image url('/static/img/header/3.png')
    color #fff
    background-size cover
    .LC
      justify-content center


@media (max-width 600px)
  .header
    background-image url('/static/img/header/4.png')
    background-size cover
    background-position center center
    min-height 630px
    .LC
      min-height 600px
    h1
      font-size 2rem
    .mouse
    .mOne
    .mTwo
    .mThree
      display none


</style>