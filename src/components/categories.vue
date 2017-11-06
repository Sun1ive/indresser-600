<template>
  <div class="wrapper">
    <v-container fluid class="categories">
      <v-layout>
        <v-flex xs12 sm4 lg6 v-scroll-to="'.coats'">
          <h2>Пальто</h2>
        </v-flex>
        <v-flex xs12 sm4 lg3 v-scroll-to="'.shortCoats'">
          <h2>Пальто</h2>
        </v-flex>
        <v-flex xs12 sm4 lg3 v-scroll-to="'.jacket'">
          <h2>Жилеты</h2>
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
        font-size responsive 1rem 1.2rem
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

@media (max-width 600px)
  .categories
    .layout
      flex-direction column
      min-height 800px
      .myButton
        display none
      .flex
        &:nth-child(2)
        &:last-child
          align-items center
          justify-content center
</style>