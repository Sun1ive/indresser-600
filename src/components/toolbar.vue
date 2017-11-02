<template>
  <div> 
  <v-navigation-drawer temporary absolute v-model="drawer">
      <v-list class="pa-1">
        <v-list-tile avatar class="text-xs-center">
          <img src="/static/img/logo.png">
        </v-list-tile>
      </v-list>
      <v-list class="pt-0">
        <v-divider></v-divider>
        <v-list-tile v-for="item in toolbarMenu" :key="item.title" @click="">
          <v-list-tile-content @click.stop="drawer = false">
          <!-- <v-list-tile-content @click.stop="drawer = false" v-scroll-to="item.scrollTo"> -->
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-content @click.stop="drawer = false">
            <v-list-tile-title>Свернуть</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :fixed="isFixed">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img style="width: 100%" class="logo" src="/static/img/logo.png" alt="logo">
      </v-toolbar-title>
        <a class="hidden-xs-only" href="tel:380680202090">+38 (068) 020 2090</a>
        <v-spacer></v-spacer>
        <a class="hidden-xs-only" href="tel:380980202092">+38 (098) 020 2092</a>
    </v-toolbar>
   </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
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
  &__content
    a
      color #000
      text-decoration none
</style>