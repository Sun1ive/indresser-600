<template>
  <header>
    <div class="wrapper">
      <v-container fluid class="header">
        <v-layout class="LC" column justify-end>
          <h1>Верхняя одежда Осень-Зима 2017/2018</h1>
          <p>Вы ищете женственное и удобное платье или модное пальто? Тогда выбирайте наши практичные и стильные женские вещи</p>
        </v-layout>
        <v-layout class="LC" align-center>
          <div class="myButton">Смотреть коллекцию</div>
        </v-layout>
        <div class="mouse"></div>
      </v-container>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style scoped lang="stylus">
.header
  background-image url('/static/img/header/header.png')
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

@media (max-width: 1440px)
  .header
    background-image url('/static/img/header/header1.png')
    h1
      font-size 3rem
      text-align center
      text-shadow 1px 1px 1px #fff
    p
      text-shadow 1px 1px 1px #fff
      text-align center
    .LC
      &:nth-child(2)
        justify-content center

@media (max-width 700px)
  .header
    background-image url('/static/img/header/header2.png')
    min-height 600px
    h1
      font-size 2rem
    .mouse
      display none
</style>