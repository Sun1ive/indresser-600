<template>
  <v-container fluid class="catalogModal">
    <v-layout justify-center align-center>
      <v-form class="Form" @submit.prevent="submit">
        <v-text-field type="email" required v-model="email" label="Введите Ваш e-mail"></v-text-field>
        <button type="submit" class="myButton">Отправить</button>
      </v-form>
    </v-layout>
      <div class="close" @click="closeForm"></div>
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

          this.$http.post('https://myvuewebapp.firebaseio.com/catalog.json', this.email)
            .then(r => console.log(r))
            .catch(e => console.log(e));
      
          this.email = '';
          this.$emit('closeForm');
        } else {
          console.log(this.email);
        }
      },
      closeForm () {
        this.$emit('closeForm');
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../../stylus/custom'

.catalogModal
  background-color #fff
  position relative
  .Form
    min-height 100px
    display flex
    justify-content center
    align-items center
    flex-direction column
    padding 1rem

</style>