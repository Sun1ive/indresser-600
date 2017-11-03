<template>
  <div class="wrapper">
    <v-container fluid class="jacket">
      <v-layout align-center>
        <v-flex xs12 sm6>
          <v-carousel hide-controls>
            <v-carousel-item v-for="(item, i) in jackets" :key="i" :src="item"></v-carousel-item>
            <div class="myButton">Посмотреть</div>
          </v-carousel>
        </v-flex>
        <v-flex xs12 sm6>
          <div class="flexWrapper">
            <h2>Жилеты</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis harum repellendus earum excepturi tempore illo labore reprehenderit pariatur! Iste, quam ullam repellendus qui quas minus voluptatem. Eaque accusantium esse unde.</p>
            <img src="/static/img/jacket.jpg" alt="coat">
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jackets: [
        '/static/slider/jacket/1.jpg',
        '/static/slider/jacket/2.jpg',
        '/static/slider/jacket/6.jpg',
        '/static/slider/jacket/3.jpg',
        '/static/slider/jacket/4.jpg',
        '/static/slider/jacket/5.jpg',
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
@import '../../stylus/category.styl'
.flexWrapper
  background-image url('/static/img/222.jpg')
</style>