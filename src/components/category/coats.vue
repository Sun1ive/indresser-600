<template>
  <div class="wrapper">
    <v-container fluid class="coats">
      <v-layout align-center>
        <v-flex xs12 sm12 md6 lg6>
          <div class="flexWrapper">
            <h2>Пальто</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum repellendus earum excepturi tempore illo labore reprehenderit pariatur! Iste, quam ullam repellendus qui quas minus voluptatem. Eaque accusantium esse unde.</p>
            <img src="/static/img/coat.jpg" alt="coat">
          </div>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6>
          <v-carousel hide-controls>
            <v-carousel-item v-for="(item, i) in coats" :key="i" :src="item"></v-carousel-item>
            <div class="myButton" @click.stop="drawer = true">Купить</div>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog max-width="1000" v-model="drawer">
      <app-order @closeForm="closeForm"></app-order>
    </v-dialog>
  </div>
</template>

<script>
import order from '../modals/orderCoat'
export default {
  components: {
    'app-order': order
  },
  data() {
    return {
      drawer: false,
      coats: [
        '/static/slider/coatsLong/z.jpg'
/*         '/static/slider/coatsLong/1.png',
        '/static/slider/coatsLong/2.jpg',
        '/static/slider/coatsLong/3.jpg',
        '/static/slider/coatsLong/4.jpg',
        '/static/slider/coatsLong/5.jpg',
        '/static/slider/coatsLong/6.jpg',
        '/static/slider/coatsLong/7.jpg',
        '/static/slider/coatsLong/8.jpg',
        '/static/slider/coatsLong/9.jpg',
        '/static/slider/coatsLong/10.jpg',
        '/static/slider/coatsLong/11.jpg',
        '/static/slider/coatsLong/12.jpg', */
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
  background-image url('/static/img/111.jpg')
</style>