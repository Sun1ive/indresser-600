<template>
  <v-container fluid class="sContainer">
    <h2>Акция</h2>
    <p>Скидка на все товары 30%</p>
    <div class="close" @click="close"></div>
    <div class="myButton mt-5" v-scroll-to="'.discountForm'" @click="close">Введите данные</div>
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
  background-image url('/static/img/stock.jpg')
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
    font-size responsive 1.2rem 2.5rem
    text-align center
    padding 1rem
  .close
    top 3%
    right 3%

@media (max-width 430px)
  .sContainer
    min-height 300px
</style>