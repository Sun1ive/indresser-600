<template>
  <div class="wrapper">
    <v-container fluid class="shortCoats">
       <v-layout align-center>
        <v-flex xs12 sm12 md6 lg6>
          <div class="flexWrapper">
            <h2>Пальто легкое</h2>
            <p class="text-xs-center">Классическое пальто - это не скучно, если Вы улыбаетесь и идете уверенным шагом. Потому-что в нем вы будете себя чувствовать королевой!</p>
            <img src="../../assets/img/shortCoat.jpg" alt="coat">
          </div>
        </v-flex>
        <v-flex class="sliderBox" xs12 sm12 md6 lg6>
          <slider  width="100%" :interval="6000" animation="fade" :speed="900" height="100%">
            <slider-item v-for="(item, i) in coats" :key="i">
              <img :src="item" alt="coat">
            </slider-item>
          </slider>
            <div class="oldPrice"><s>1890 грн</s></div>
            <div class="newPrice">1323 грн</div>
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
import order from '../modals/orderShort'
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
        '/static/slider/coatsShort/1.jpg',
        '/static/slider/coatsShort/2.jpg',
        '/static/slider/coatsShort/3.jpg',
        '/static/slider/coatsShort/4.jpg',
        '/static/slider/coatsShort/5.jpg',
        '/static/slider/coatsShort/6.jpg'
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
  // background-image url('/static/img/333.jpg')
  background-image url('../../assets/img/333.jpg')
</style>