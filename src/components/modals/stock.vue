<template>
  <v-container fluid class="sContainer">
    <h2>Успей купить</h2>
    <p>Акция до 08.03 скидка 20% на всю верхнюю одежду от inDresser</p>
    <div class="close" @click="close"></div>
    <div class="myButton mt-5" v-scroll-to="'.coats'" @click="close">Перейти к покупкам</div>
  </v-container>
</template>

<script>
  export default {
    methods: {
      close () {
        this.$emit('close');
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../../stylus/custom'

.sContainer
  // background-image url('/static/img/stock.jpg')
  background-image url('../../assets/img/stock.jpg')
  background-size cover
  min-height 500px
  display flex
  justify-content center
  align-items center
  flex-direction column
  position relative
  h2
    color red
  p
    font-size responsive 1.2rem 2.2rem
    text-align center
    padding 1rem
  .close
    top 3%
    right 3%

@media (max-width 430px)
  .sContainer
    min-height 300px
</style>