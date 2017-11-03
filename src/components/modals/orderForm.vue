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
        <div class="close" @click="close"></div>
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
      },
      close () {
        this.$emit('closeForm');
      }
    }
  }
</script>

<style scoped lang="stylus">
.layout
  padding 1rem
  background-color #fff

.flex
  img
    width 100%
    height 100%
.orderForm
  width 100%
  text-align center
  padding 1rem 6rem
  min-height 400px
  position relative
  .myButton
    height 50px
    margin-top 5rem
  h2
    font-size 3rem
  .close
    background-image url('/static/img/close.svg')
    position absolute
    width 20px
    height 20px
    right 10px
    top 10px
    opacity 0.3
    cursor pointer
    transition .4s
    &:hover
      opacity .8
</style>