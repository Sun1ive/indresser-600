<template>
  <div class="wrapper">
    <v-container fluid class="coat">
      <v-layout class="localWrapper">
        <h2>Верхняя одежда Осень-Зима 2017/2018</h2>
      </v-layout>
      <v-layout class="localWrapper my-5">
        <v-flex sm12 sm10 md8 lg6>
          <p>Вы ищете женственное и удобное платье или модное пальто? Тогда выбирайте наши практичные и стильные женские вещи!</p>
        </v-flex>
      </v-layout>
      <v-layout class="localWrapper">
        <div class="myButton">Смотреть коллекцию</div>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped lang="stylus">
.coat
  background-image url('/static/img/coat.png')
  min-height 490px
  .localWrapper
    max-width 1000px
    margin-left auto
    &:nth-child(1)
      min-height 200px
      align-items flex-end
  
@media (max-width: 1440px)
  .coat
    .localWrapper
      justify-content center
      &:nth-child(1)
        justify-content center
        align-items center
        h2
          text-align center
          color #fff
      &:nth-child(2)
        color #fff
        text-align center
        font-size responsive 1rem 1.3rem

@media (max-width: 1000px)
  .localWrapper
    align-items center
    justify-content center
    color #fff
    text-align center
    .myButton
      border-color #fff
    p
      width 90%
      margin 0 auto
</style>