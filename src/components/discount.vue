<template>
  <div class="wrapper">
    <v-container fluid class="discountForm">
      <v-layout class="LC" justify-end align-center>
          <div class="stockWrapper">
            <h3>Успей купить !</h3>
            <p>Акция до 08.03 скидка 20% <br> на всю верхнюю одежду от inDresser</p>
            <v-layout justify-space-around class="buttonWrapper mt-4">
              <div class="myButton Red mx-2" v-scroll-to="'.coats'">Перейти к покупкам</div>
              <a href="https://indresser.com" target="_blank" class="myButton White">Перейти на сайт</a>
            </v-layout>
          </div>
      </v-layout>
    </v-container>
  </div>
</template>


<style scoped lang="stylus">
.discountForm
  background-image: url('../assets/img/formbg.jpg')
  .LC
    min-height 480px
    color #fff
.stockWrapper
  h3
    text-transform uppercase
    font-size responsive 2.4rem 5rem
    text-align center
  p
    font-size responsive 1rem 2rem
  .Red
    background-color red
    border-color red
  .White
    background-color #fff
    color red
    border-color #fff

@media (max-width 1450px)
  .discountForm
    background-position-x center
    .LC
      justify-content center


@media (max-width 450px)
  .discountForm
    p
      text-align center
    .buttonWrapper
      flex-direction column
      align-items center
      .myButton
        margin 1rem 0
</style>