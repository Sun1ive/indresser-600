<template>
  <div class="wrapper">
    <v-container fluid class="coat">
      <v-layout justify-center align-center>
        <v-flex sm6>
          <h2>Пальто</h2>
          <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed unde laborum, atque voluptate, tenetur nostrum ratione dolores rerum animi a voluptas nihil illum porro perferendis. Voluptatibus in repudiandae perspiciatis ut!</p>
          <div class="imgWrapper">
            <img src="/static/img/coat.jpg" alt="coat">
          </div>
        </v-flex>
        <v-flex sm3>
          <v-carousel hide-controls class="mt-4">
            <v-carousel-item v-for="(item, i) in coats" :key="i" :src="item"></v-carousel-item>
          </v-carousel>
            <div class="myButton mt-5">Подробнее</div>
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
  .imgWrapper
    max-width 400px
    max-height 400px
    margin 2rem auto
    img
      width 100%
  .layout
    min-height 900px
    .flex
      min-height 620px
  .text
  h2
    max-width: 400px
    margin: 0 auto
  .carousel__item
    transition .8s
</style>