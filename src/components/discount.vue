<template>
  <div class="wrapper">
    <v-container fluid class="discountForm">
      <v-layout class="LC" justify-end align-center>
        <v-form class="form text-xs-center mr-4" @submit.prevent="submit">
          <h2>Получите скидку 30%</h2>
          <input type="text" v-model.lazy="userData.name" required placeholder="Введите Ваше имя" class="inputText">
          <input type="number" v-model.lazy="userData.phone" required placeholder="Введите Ваш телефон" class="inputText">
          <input type="email" v-model.lazy="userData.email" required placeholder="Введите Ваш e-mail" class="inputText">
          <button class="myButton" type="submit">Отправить</button>
        </v-form>
      </v-layout>
    </v-container>
    
    <v-dialog max-width="200" v-model="drawer">
      <app-thanks></app-thanks>
    </v-dialog>
  </div>
</template>

<script>
import thanks from './modals/thanks'
  export default {
    components: {
      'app-thanks': thanks,
    },
    data () {
      return {
        userData: {
          name: '',
          phone: null,
          email: ''
        },
        drawer: false,
        isDisabled: true,
      }
    },
    methods: {
      submit () {
         this.$http.post('https://myvuewebapp.firebaseio.com/discount.json', this.userData)
          .then(r => console.log(r))
          .catch(e => console.log(e))

       /*  Email.send(
        `coats@indresser.com`,
        'sunliveua@gmail.com',
        'Заявка на скидку с сайта landing.indresser.com',
        `Пользователь: ${this.userData.name},
        Телефон: ${this.userData.phone}
        Почта: ${this.userData.email}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t');
 */

        this.drawer = true

        this.userData = {
          name: '',
          phone: '',
          email: ''
        }
         
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


@media (max-width 1100px)
  .discountForm
    background-position-x center

@media (max-width 730px)
  .LC
    justify-content center
    .form
      margin-right 0 !important
</style>