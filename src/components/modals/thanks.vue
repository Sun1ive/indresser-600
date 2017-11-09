<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <h3>Спасибо! Мы получили Вашу заявку.</h3>
        <p>Наш менеджер скоро свяжется с Вами для уточнения деталей заказа.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
.flex
  position relative
  background-color #fff
  background-image url('../../assets/img/thanks.png')
  background-size cover
  h3
    font-size responsive 1rem 2.5rem
    padding-top 1rem
  p
    font-size responsive 1rem 1.3rem
    padding 1rem 0 2rem 0
</style>