<template>
  <div class="wrapper">
    <v-container fluid class="catalog">
      <v-layout>
        <v-flex xs12 md4 lg6></v-flex>
        <v-flex xs12 md4 lg3></v-flex>
        <v-flex xs12 md4 lg3></v-flex>
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
  .layout
    position relative
    min-height 500px
    .myButton
      position absolute
      top 50%
      left 10%
    .flex
      transition .4s ease
      position relative
      overflow hidden
      &:hover
        transform scale(1.1)
        transition .4s ease
      &:first-child
        // background-image url('/static/img/catalog/3.jpg')
        background-image url('../assets/img/catalog/3.jpg')
        background-size cover
      &:nth-child(2)
        // background-image url('/static/img/catalog/2.jpg')
        background-image url('../assets/img/catalog/2.jpg')
        background-size cover
      &:nth-child(3)
        // background-image url('/static/img/catalog/1.jpg')
        background-image url('../assets/img/catalog/1.jpg')
        background-size cover


@media (max-width 1550px)
  .catalog
    .layout
      .flex
        &:first-child
          background-position-x right


@media (max-width 600px)
  .catalog
    .layout
      flex-direction column
      .flex
        min-height 400px
        background-size contain
        &:first-child
          // background-image url('/static/img/catalog/3low.jpg')
          background-image url('../assets/img/catalog/3low.jpg')
      .myButton
        left 50%
        top 95%
        transform translate(-50%, -50%)
        color #fff
        border-color #fff
        &:hover
          border-color #000
</style>