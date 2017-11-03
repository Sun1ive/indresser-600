<template>
  <div class="wrapper">
    <v-container fluid class="shortCoats">
       <v-layout align-center>
        <v-flex xs12 sm6>
          <div class="flexWrapper">
            <h2>Пальто</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum repellendus earum excepturi tempore illo labore reprehenderit pariatur! Iste, quam ullam repellendus qui quas minus voluptatem. Eaque accusantium esse unde.</p>
            <img src="/static/img/shortCoat.jpg" alt="coat">
          </div>
        </v-flex>
        <v-flex xs12 sm6>
          <v-carousel hide-controls>
            <v-carousel-item v-for="(item, i) in coats" :key="i" :src="item"></v-carousel-item>
            <div class="myButton">Купить</div>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coats: [
        '/static/slider/coatsShort/1.jpg',
        '/static/slider/coatsShort/2.jpg',
        '/static/slider/coatsShort/3.jpg',
        '/static/slider/coatsShort/4.jpg',
        '/static/slider/coatsShort/5.jpg',
        '/static/slider/coatsShort/6.jpg'
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
@import '../../stylus/category.styl'

.flexWrapper
  background-image url('/static/img/333.jpg')
</style>