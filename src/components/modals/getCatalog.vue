<template>
  <v-container fluid class="catalogModal">
    <v-layout justify-center align-center>
      <v-form class="Form" @submit.prevent="submit">
        <v-text-field v-model="email" label="Введите Ваш e-mail"></v-text-field>
        <button type="submit" class="myButton">Заказать</button>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: ''
      }
    },
    methods: {
      submit () {
        alert(`Submitted ${this.email}`);
        this.email = '';
        this.$emit('closeForm');
      }
    }
  }
</script>

<style scoped lang="stylus">
.catalogModal
  background-color rgba(#000, .6)
  .Form
    min-height 100px
    display flex
    justify-content center
    align-items center
    flex-direction column
    padding 1rem
    .myButton
      border-color #fff
      color #fff
</style>