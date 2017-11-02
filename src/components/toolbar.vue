<template>
  <div> 
  <v-navigation-drawer style="width: 170px" v-model="drawer">
      <v-list class="pt-0">
        <v-list-tile v-for="item in toolbarMenu" :key="item.title" @click="">
          <v-list-tile-content @click.stop="drawer = false">
          <!-- <v-list-tile-content @click.stop="drawer = false" v-scroll-to="item.scrollTo"> -->
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" class="mt-5">
          <v-list-tile-content @click.stop="drawer = false">
            <v-list-tile-title>Свернуть</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :fixed="isFixed">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img class="logo" src="/static/img/logo1.png" alt="logo">
      </v-toolbar-title>
        <a class="hidden-xs-only" href="tel:380680202090">+38 (068) 020 2090</a>
        <a class="hidden-xs-only" href="tel:380980202092">+38 (098) 020 2092</a>
    </v-toolbar>
   </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      isFixed: false,
      toolbarMenu: [
        {
          title: 'Пальто', scrollTo: ''
        },
        {
          title: 'Жилет', scrollTo: ''
        },
        {
          title: 'Пальто', scrollTo: ''
        },
      ]
    }
  }
};
</script>

<style scoped lang="stylus">
.toolbar
  background-color transparent
  box-shadow none
  a
    color #000
    text-decoration none
</style>