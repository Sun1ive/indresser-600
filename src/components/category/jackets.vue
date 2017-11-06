<template>
  <div class="wrapper">
    <v-container fluid class="jacket">
      <v-layout align-center>
        <v-flex xs12 sm12 md6 lg6>
          <v-carousel hide-controls>
            <v-carousel-item v-for="(item, i) in jackets" :key="i" :src="item"></v-carousel-item>
            <div class="myButton" @click.stop="drawer = true">Купить</div>
          </v-carousel>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6>
          <div class="flexWrapper">
            <h2>Шерстяной жилет</h2>
            <p class="text-xs-center">Очень популярное решение для активных девушек. Двубортный ворот и пояс обманка смотрятся чрезвычайно женственно.</p>
            <img src="/static/img/jacket.jpg" alt="coat">
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog max-width="1000" v-model="drawer">
      <app-order @closeForm="closeForm"></app-order>
    </v-dialog>
  </div>
</template>

<script>
import order from '../modals/orderJacket'
export default {
  components: {
    'app-order': order
  },
  data() {
    return {
      drawer: false,
      jackets: [
        '/static/slider/jacket/1.jpg',
        '/static/slider/jacket/2.jpg',
        '/static/slider/jacket/6.jpg',
        '/static/slider/jacket/3.jpg',
        '/static/slider/jacket/4.jpg',
        '/static/slider/jacket/5.jpg',
      ]
    };
  },
  methods: {
    closeForm () {
      this.drawer = false
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../stylus/category.styl'
.flexWrapper
  background-image url('/static/img/222.jpg')

@media (max-width 700px)
  .layout
    flex-direction column-reverse
</style>