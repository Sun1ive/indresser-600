<template>
  <div class="wrapper">
    <v-container fluid class="coat">
      <v-layout align-center>
        <v-flex xs12 sm6>
          <div class="flexWrapper">
            <h2>Пальто</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum repellendus earum excepturi tempore illo labore reprehenderit pariatur! Iste, quam ullam repellendus qui quas minus voluptatem. Eaque accusantium esse unde.</p>
            <img src="/static/img/coat.jpg" alt="coat">
          </div>
        </v-flex>
        <v-flex xs12 sm6>
          <v-carousel hide-controls>
            <v-carousel-item v-for="(item, i) in coats" :key="i" :src="item"></v-carousel-item>
            <div class="myButton">Посмотреть</div>
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
        '/static/slider/coatsLong/1.jpg',
        '/static/slider/coatsLong/2.jpg',
        '/static/slider/coatsLong/6.jpg',
        '/static/slider/coatsLong/12.jpg',
        '/static/slider/coatsLong/3.jpg',
        '/static/slider/coatsLong/4.jpg',
        '/static/slider/coatsLong/7.jpg',
        '/static/slider/coatsLong/10.jpg',
        '/static/slider/coatsLong/5.jpg',
        '/static/slider/coatsLong/8.jpg',
        '/static/slider/coatsLong/9.jpg',
        '/static/slider/coatsLong/11.jpg',
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
@import '../../stylus/category.styl'
</style>