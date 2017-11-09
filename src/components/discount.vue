<template>
  <div class="wrapper">
    <v-container fluid class="discountForm">
      <v-layout class="LC" justify-end align-center>
          <div class="stockWrapper">
            <h3>Успей купить !</h3>
            <p>Акция до 30.11 скидка 30% на всю верхнюю одежду от inDresser</p>
            <v-layout justify-space-around class="buttonWrapper mt-4">
              <div class="myButton Red" v-scroll-to="'.coats'">Перейти к покупкам</div>
              <div class="myButton White" @click.stop="getCatalog">Посмотреть каталог</div>
            </v-layout>
          </div>
      </v-layout>
    </v-container>

    <v-dialog max-width="330" v-model="drawer">
      <app-catalog @closeForm="closeForm"></app-catalog>
    </v-dialog>


  </div>
</template>

<script>
import thanks from './modals/thanks';
import catalog from './modals/getCatalog'
export default {
  components: {
    'app-thanks': thanks,
    'app-catalog': catalog,
  },
  data() {
    return {
      userData: {
        name: '',
        phone: '',
        email: ''
      },
      drawer: false,
      isDisabled: true
    };
  },
  methods: {
    getCatalog () {
      this.drawer = true;
    },
    closeForm () {
      this.drawer = false;
    },
  }
};
</script>

<style scoped lang="stylus">
.discountForm
  background-image: url('../assets/img/formbg.jpg')
  .LC
    min-height 450px
    color #fff
.stockWrapper
  h3
    text-transform uppercase
    font-size responsive 2.4rem 5rem
    text-align center
  p
    font-size responsive 1rem 2rem
  .Red
    background-color red
    border-color red
  .White
    background-color #fff
    color red
    border-color #fff

@media (max-width 1450px)
  .discountForm
    background-position-x center
    .LC
      justify-content center


@media (max-width 450px)
  .discountForm
    p
      text-align center
    .buttonWrapper
      flex-direction column
      align-items center
      .myButton
        margin 1rem 0
</style>