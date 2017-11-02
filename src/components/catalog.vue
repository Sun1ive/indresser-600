<template>
  <div class="wrapper">
    <v-container fluid class="catalog">
      <v-layout align-end class="LC">
        <h2>Получить каталог</h2>
      </v-layout>
      <v-layout align-center class="LC">
        <div class="myButton">Заказать каталог</div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
.catalog
  background-image url('/static/img/catalog.jpg')
  height 600px
  .LC
    color #fff
    &:nth-child(1)
      min-height 300px
    &:nth-child(2)
      min-height 200px
    .myButton
      color #fff
      border-color #fff
</style>