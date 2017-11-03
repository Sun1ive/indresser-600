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
        '/static/slider/1.jpg',
        '/static/slider/2.jpg',
        '/static/slider/6.jpg',
        '/static/slider/3.jpg',
        '/static/slider/4.jpg',
        '/static/slider/7.jpg',
        '/static/slider/5.jpg',
        '/static/slider/8.jpg',
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
.coat
  .layout
    min-height 700px
    .flexWrapper
      width 80%
      margin 0 auto
      p
        width 60%
        margin 2rem 0

.carousel
  height 800px
  &__item
    transition 1.8s ease-in-out
</style>