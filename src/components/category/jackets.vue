<template>
  <div class="wrapper">
    <v-container fluid class="jacket">
      <v-layout align-center>
        <v-flex class="sliderBox" xs12 sm12 md6 lg6>
          <slider  width="100%" :interval="6000" animation="fade" :speed="900" height="100%">
            <slider-item v-for="(item, i) in jackets" :key="i">
              <img :src="item" alt="coat">
            </slider-item>
          </slider>
            <div class="oldPrice"><s>2190 грн</s></div>
            <div class="newPrice">1533 грн</div>
            <div class="myButton" @click.stop="drawer = true">Купить</div>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6>
          <div class="flexWrapper">
            <h2>Жилет прямой</h2>
            <p class="text-xs-center">Очень популярное решение для активных девушек. Двубортный ворот и пояс обманка смотрятся чрезвычайно женственно.</p>
            <img src="../../assets/img/jacket.jpg" alt="coat">
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog max-width="500" v-model="drawer">
      <app-order @closeForm="closeForm"></app-order>
    </v-dialog>
  </div>
</template>

<script>
import order from '../modals/orderJacket'
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  components: {
    'app-order': order,
    Slider,
    SliderItem
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
  background-image url('../../assets/img/222.jpg')

@media (max-width 700px)
  .layout
    flex-direction column-reverse
</style>