<template>
  <div class="wrapper">
    <v-container fluid grid-list-xl class="about">
      <v-layout class="LC my-5">
        <h2>О бренде</h2>
      </v-layout>
      <v-layout class="LC">
        <v-flex xs11 sm12 lg6>
          <p align="justify">Мы Украинская студия дизайнерской женской одежды inDresser. Для Вас мы собрали лучших дизайнеров, которые среди множества вариантов, выбирают отличные решения современных женских нарядов. Наши вещи отлично носятся, так как пошиты из качественных тканей.</p>
        </v-flex>
        <v-flex xs11 sm12 lg6>
          <p align="justify">Клиенты с большим удовольствием одевают луки от inDresser как на работу, так и на вечеринки или обычные прогулки в городе.
          <br>
          Вы будете довольны образами от inDresser, а мы будем гордится сотрудничеством с Вами. </b></p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<style scoped lang="stylus">
.flex
  p
    font-family Gilroy-Light, Arial, Helvetica, sans-serif
    font-size responsive 1.1rem 1.3rem

@media (max-width 1500px)
  .LC
    justify-content center

@media (max-width: 1000px)
  .flex
    p
      font-size 1rem

@media (max-width 800px)
  .LC
    flex-direction column
    align-items center
</style>