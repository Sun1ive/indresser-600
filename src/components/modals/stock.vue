<template>
  <v-container fluid class="sContainer">
    <h2>Акция</h2>
    <p>Первым 100 покупателям скидка 100 грн</p>
    <div class="close" @click="close"></div>
    <div class="myButton mt-5" v-scroll-to="'.coats'" @click="close">Выбрать пальто</div>
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
    font-size responsive 1rem 2.5rem
    text-align center
    padding 1rem
  .close
    background-image url('/static/img/close.svg');
    width 25px
    height 25px
    position absolute
    right 3%
    top 3%
    cursor pointer
</style>