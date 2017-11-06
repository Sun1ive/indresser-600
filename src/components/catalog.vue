<template>
  <div class="wrapper">
    <v-container fluid class="catalog">
      <v-layout align-end class="LC">
        <h2>Получить каталог</h2>
      </v-layout>
      <v-layout align-center class="LC">
        <div class="myButton" @click.stop="drawer = true">Заказать каталог</div>
      </v-layout>
    </v-container>
    <v-dialog v-model="drawer" max-width="350">
      <app-catalog @closeForm="closeForm"></app-catalog>
    </v-dialog>
  </div>
</template>

<script>
import catalog from './modals/getCatalog'
  export default {
    components: {
      'app-catalog': catalog
    },
    data () {
      return {
        drawer: false
      }
    },
    methods: {
      closeForm () {
        this.drawer = false
      }
    }
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
      &:hover
        border-color #000

@media (max-width 1440px)
  .catalog
    .LC
      justify-content center
</style>