<template>
  <div> 
  <v-navigation-drawer style="width: 170px" v-model="drawer">
      <v-list class="pt-0">
      <v-list-tile @click="isStock = true">
          <v-list-tile-content>
            <v-list-tile-title class="stock">Акция</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-for="item in toolbarMenu" :key="item.title" @click="">
          <v-list-tile-content v-scroll-to="item.scrollTo">
            <v-list-tile-title class="test">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" class="mt-5">
          <v-list-tile-content @click.stop="drawer = false">
            <v-list-tile-title>Свернуть</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <app-scroll></app-scroll>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <!-- <img class="logo" src="/static/img/logo1.png" alt="logo"> -->
        <img class="logo" src="../assets/img/logo1.png" alt="logo">
      </v-toolbar-title>
        <a class="hidden-xs-only" href="tel:380680202090">+38 (068) 020 2090</a>
        <a class="hidden-xs-only" href="tel:380980202092">+38 (098) 020 2092</a>
    </v-toolbar>

    <v-dialog class="test" v-model="isStock" max-width="500">
      <app-stock @close="close"></app-stock>
    </v-dialog>
   </div>
</template>

<script>
import stock from './modals/stock'
import scroll from './widgets/scrollTop'

export default {
  components: {
    'app-stock': stock,
    'app-scroll': scroll,
  },
  data () {
    return {
      drawer: true,
      isStock: false,
      toolbarMenu: [
        {
          title: 'Пальто длинное', scrollTo: '.coats'
        },
        {
          title: 'Жилет прямой', scrollTo: '.jacket'
        },
        {
          title: 'Пальто легкое', scrollTo: '.shortCoats'
        },
      ]
    }
  },
  methods: {
    close () {
      this.isStock = false
    },
    toolbar () {
      let offset = window.pageYOffset;
      const toolbar = document.querySelector('.toolbar')
     if (offset >= 350 && !toolbar.classList.contains('fixed')) {
       toolbar.classList.add('fixed');
     } else if (offset <= 350 && toolbar.classList.contains('fixed')) {
       toolbar.classList.remove('fixed');
     }
    }
  },
  created () {
    window.addEventListener('scroll', this.toolbar)
  },
  mounted () {
    const width = window.innerWidth;
    width <= 1024 ? this.drawer = false : this.drawer = true
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.toolbar)
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

.fixed
  position fixed
  opacity 1
  transition .5s ease
  background-color #fff
  // animation fade 1s ease
  &:hover
    opacity 1

.stock
  font-family Gilroy-ExtraBold, Arial, Helvetica, sans-serif
  color red
  font-size responsive 1.8rem 2.2rem
</style>
