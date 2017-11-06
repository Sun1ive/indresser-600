<template>
  <div class="wrapper">
    <v-container fluid class="coat">
      <v-layout class="localWrapper">
        <h2>Выбери свой Look</h2>
      </v-layout>
      <v-layout class="localWrapper my-5">
        <v-flex sm12 sm10 md8 lg6>
          <p class="text-xs-center">На первом месте мы ставим качество и удобство. Женщина должна себя чувствовать в нем уверенно и комфортно, совершеннго не задумываясь все время о том, во что она одета...</p>
        </v-flex>
      </v-layout>
      <v-layout class="localWrapper">
        <!-- <div class="myButton">Смотреть коллекцию</div> -->
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped lang="stylus">
.coat
  background-image url('/static/img/coatbg.jpg')
  min-height 490px
  .localWrapper
    max-width 1000px
    margin-left auto
    justify-content center
    color #fff
    .myButton
      border-color #fff
      &:hover
        border-color #000
    h2
      text-align center
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
      text-align center
      margin 0 auto
</style>