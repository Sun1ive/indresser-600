<template>
  <div class="wrapper">
    <v-container fluid class="discountForm">
      <v-layout class="LC" justify-end align-center>
        <v-form class="form text-xs-center mr-4" @submit.prevent="submit">
          <h2>Получите скидку 30%</h2>
          <v-text-field ref="input" style="color: #fff !important" v-model="userData.name" label="Ваше имя"></v-text-field>
          <v-text-field ref="input" style="color: #fff !important" v-model="userData.phone" label="Ваш телефон"></v-text-field>
          <v-text-field ref="input" style="color: #fff !important" v-model="userData.email" label="Ваш e-mail"></v-text-field>
          <button class="myButton" type="submit">Получить скидку</button>
        </v-form>
      </v-layout>
      <!-- <div class="circle">
        <div class="disc">30%</div>
      </div> -->
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
        console.log(this.$refs.input.$refs.input.offsetParent);
      }
    }
  }
</script>

<style scoped lang="stylus">
.discountForm
  background-image url('/static/img/formbg.png')
  position relative
  .LC
    min-height 490px
    color #fff
    .form
      font-family Gilroy-Light, Arial, Helvetica, sans-serif
      h2
        font-family Gilroy-ExtraBold, Arial, Helvetica, sans-serif
        font-size responsive 2rem 4rem
      .myButton
        border-color #fff

.circle
  width 300px
  height 300px
  border-radius 50%
  background #fff
  position absolute
  left 5%
  top 50%
  transform translate(-50%, -50%)
  .disc
    color red
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    font-size 4rem

@media (max-width 730px)
  .LC
    justify-content center
</style>