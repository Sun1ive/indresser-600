<template>
  <div class="wrapper">
    <v-container fluid class="coats">
      <v-layout align-center>
        <v-flex xs12 sm12 md6 lg6>
          <div class="flexWrapper">
            <h2>Пальто длинное</h2>
            <p class="text-xs-center">Демисезонное пальто прямого кроя из мягкого кашемира - неизменная вещь в женском гардеробе. <br> А у Вас уже такое есть?</p>
            <!-- <img src="/static/img/coat.jpg" alt="coat"> -->
            <img src="../../assets/img/coat.jpg" alt="coat">
          </div>
        </v-flex>
        <v-flex class="sliderBox" xs12 sm12 md6 lg6>
          <slider width="100%" :interval="4000" animation="fade" :speed="900" height="100%">
            <slider-item v-for="(item, i) in coats" :key="i">
              <img :src="item" alt="coat">
            </slider-item>
          </slider>
            <div class="oldPrice"><s>2790 грн</s></div>
            <div class="newPrice">1953 грн</div>
            <div class="myButton" @click.stop="drawer = true">Купить</div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog max-width="500" v-model="drawer">
      <app-order @closeForm="closeForm"></app-order>
    </v-dialog>
  </div>
</template>

<script>
import order from '../modals/orderCoat'
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
      coats: [
      '/static/slider/coatsLong/1.jpg',
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
      '/static/slider/coatsLong/12.jpg',
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
  background-image url('../../assets/img/111.jpg')


</style>