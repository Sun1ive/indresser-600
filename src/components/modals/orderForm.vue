<template>
  <v-container fluid>
    <v-layout>
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
.orderForm
  background-color #fff
  width 100%
  text-align center
</style>