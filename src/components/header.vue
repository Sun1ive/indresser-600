<template>
  <header>
    <div class="wrapper">
      <v-container fluid class="header">
        <v-layout class="LC" column justify-end>
          <h1>Платья Осень-Зима 2017/2018</h1>
          <p>Вы ищете женственное и удобное платье или модное пальто? Тогда выбирайте наши практичные и стильные женские вещи</p>
        </v-layout>
        <v-layout class="LC" align-center>
          <div class="myButton">Смотреть коллекцию</div>
        </v-layout>
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
  background-image url('/static/img/header.jpg')
  min-height 930px
  h1
    font-size 3rem
  .LC
    &:nth-child(1)
      min-height 400px
    &:nth-child(2)
      min-height 200px
</style>