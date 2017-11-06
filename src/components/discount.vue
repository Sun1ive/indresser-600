<template>
  <div class="wrapper">
    <v-container fluid class="discountForm">
      <v-layout class="LC" justify-end align-center>
        <v-form class="form text-xs-center mr-4" @submit.prevent="submit">
          <h2>Получите скидку 30%</h2>
          <input type="text" v-model.lazy="userData.name" required placeholder="Введите Ваше имя" class="inputText">
          <input type="text" v-model.lazy="userData.phone" required placeholder="Введите Ваш телефон" class="inputText">
          <input type="text" v-model.lazy="userData.email" required placeholder="Введите Ваш e-mail" class="inputText">
          <button class="myButton" type="submit">Отправить</button>
        </v-form>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userData: {
          name: '',
          phone: '',
          email: ''
        }
      }
    },
    methods: {
      submit () {
/*     this.userData = {
          name: '',
          phone: '',
          email: ''
        } */
        // console.log(this.$refs.input.$refs.input);
      }
    }
  }
</script>

<style scoped lang="stylus">
.discountForm
  // background-image url('/static/img/formbg.png')
  background-image url('/static/img/formbg.jpg')
  .LC
    min-height 490px
    color #fff
    .form
      font-family Gilroy-Light, Arial, Helvetica, sans-serif
      display flex
      flex-direction column
      .inputText
        border-bottom 1px solid #fff
        padding 1rem 0 0 0.5rem
        margin 1rem 0
        color #fff
        font-size responsive 1rem 1.4rem
        &:focus
          outline none
        &::placeholder
          color #fff
      h2
        font-family Gilroy-ExtraBold, Arial, Helvetica, sans-serif
        font-size responsive 2rem 4rem
      .myButton
        border-color #fff
        font-family Gilroy-ExtraBold, Arial, Helvetica, sans-serif
        color #fff


@media (max-width 1000px)
  .discountForm
    background-position-x center

@media (max-width 730px)
  .LC
    justify-content center
    .form
      margin-right 0 !important
</style>