<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <img src="/static/img/order.png" alt="">
      </v-flex>
      <v-form class="orderForm">
        <h2>Заполните заказ</h2>
        <v-text-field required v-model="userData.name" label="Ваше имя"></v-text-field>
        <v-text-field required v-model="userData.phone" label="Ваш телефон"></v-text-field>
        <button class="myButton">Оформить заказ</button>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        userData: {
          name: '',
          phone: ''
        }
      }
    },
    methods: {
      submit () {
        alert(`submitted ${this.userData.name}`)
      }
    }
  }
</script>

<style scoped lang="stylus">
.flex
  img
    width 100%
    height 100%
.orderForm
  background-color #fff
  width 100%
  text-align center
  padding 1rem 6rem
  min-height 400px
  h2
    font-size 3rem
</style>