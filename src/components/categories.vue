<template>
  <div class="wrapper">
    <v-container fluid class="categories">
      <v-layout>
        <v-flex xs12 sm6 lg6 v-scroll-to="'.coats'">
          <h2>Пальто</h2>
          <div class="myButton">Подробнее</div>
        </v-flex>
        <v-flex xs12 lg3 v-scroll-to="'.jacket'">
          <h2>Пальто</h2>
        </v-flex>
        <v-flex xs12 lg3 v-scroll-to="'.shortCoats'">
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
      display flex
      color #fff
      justify-content center
      transition .4s ease
      position relative
      overflow hidden
      cursor pointer
      &:hover
        transform scale(1.1)
      .myButton
        position absolute
        top 80%
        left 50%
        transform translate(-50%, -50%)
        border-color #fff
        color #fff
      &:first-child
        background-image url('/static/img/categories/3.jpg')
        align-items center
      &:nth-child(2)
        background-image url('/static/img/categories/2.jpg')
        align-items flex-end
        h2
          margin-bottom 2rem
      &:last-child
        background-image url('/static/img/categories/1.jpg')
        align-items flex-end
        h2
          margin-bottom 2rem
</style>