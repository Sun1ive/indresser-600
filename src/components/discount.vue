<template>
  <div class="wrapper">
    <v-container fluid class="discountForm">
      <v-layout class="LC" justify-end align-center>
        <v-form class="form" @submit.prevent="submit">
          <h2>Получите скидку 30%</h2>
          <v-text-field required v-model="userData.name" label="Ваше имя"></v-text-field>
          <v-text-field required v-model="userData.phone" label="Ваш телефон"></v-text-field>
          <v-text-field required v-model="userData.email" label="Ваш e-mail"></v-text-field>
          <button class="myButton" type="submit">Получить скидку</button>
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
        alert(`submitted ${this.userData.name}`);
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
  background-image url('/static/img/formbg.png')
  .LC
    min-height 490px
    color #fff
    .form
      font-family Gilroy-Light, Arial, Helvetica, sans-serif
      h2
        font-family Gilroy-ExtraBold, Arial, Helvetica, sans-serif
      .myButton
        border-color #fff
</style>