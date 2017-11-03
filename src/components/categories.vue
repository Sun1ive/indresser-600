<template>
  <div class="wrapper">
    <v-container fluid class="categories">
      <v-layout>
        <v-flex xs12 sm6 lg6>
          <h2>Пальто</h2>
          <div class="myButton">Подробнее</div>
        </v-flex>
        <v-flex xs12 lg3>
          <h2>Пальто</h2>
        </v-flex>
        <v-flex xs12 lg3>
          <h2>Пальто</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.categories
  .layout
    min-height 500px
    .flex
      background-size cover
      position relative
      display flex
      color #fff
      justify-content center
      .myButton
        position absolute
        top 80%
        left 50%
        transform translate(-50%, -50%)
        border-color #fff
        color #fff
      &:first-child
        background-image url('/static/img/coat.jpg')
        align-items center
      &:nth-child(2)
        background-image url('/static/img/jacket.jpg')
        align-items flex-end
      &:last-child
        background-image url('/static/img/shortCoat.jpg')
        align-items flex-end
</style>