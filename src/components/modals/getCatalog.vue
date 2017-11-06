<template>
  <v-container fluid class="catalogModal">
    <v-layout justify-center align-center>
      <v-form class="Form" @submit.prevent="submit">
        <v-text-field type="email" required v-model="email" label="Введите Ваш e-mail"></v-text-field>
        <button type="submit" class="myButton">Отправить</button>
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
        if (this.email !== undefined && this.email !== '') {
          setTimeout(() => {
            window.open('https://dresses.indresser.com/catalog.pdf', '_blank');
          }, 200)
          this.email = '';
          this.$emit('closeForm');
        } else {
          console.log(this.email);
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
.catalogModal
  background-color #fff
  .Form
    min-height 100px
    display flex
    justify-content center
    align-items center
    flex-direction column
    padding 1rem
</style>