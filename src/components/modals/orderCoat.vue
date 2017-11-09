<template>
  <v-container fluid>
    <v-layout>
      <v-form class="orderForm" @submit.prevent="submit">
        <h2>Купить пальто длинное</h2>
        <v-layout class="formWrapper">
          <v-flex class="mr-3">
            <v-select :items="colors" v-model="userData.color" label="Цвет"></v-select>
          </v-flex>
          <v-flex>
            <v-select :items="sizes" v-model="userData.size" label="Размер"></v-select>
          </v-flex>
        </v-layout>
        <v-text-field required v-model="userData.fullName" label="Ваше имя и фамилия"></v-text-field>
        <v-text-field required v-model="userData.address" label="Адресс доставки"></v-text-field>
        <v-select :items="payment" v-model="userData.payment" label="Способ оплаты"></v-select>
        <v-text-field required v-model="userData.phone" label="Ваш телефон"></v-text-field>
        <button class="myButton">Подтвердить заказ</button>
        <div class="close" @click="close"></div>
      </v-form>
    </v-layout>
    

    <v-dialog max-width="700" v-model="drawer">
      <app-thanks></app-thanks>
    </v-dialog>
  </v-container>
</template>

<script>
import thanks from './thanks'
export default {
  components: {
    'app-thanks': thanks
  },
  data() {
    return {
      drawer: false,
      userData: {
        fullName: '',
        phone: '',
        email: '',
        size: null,
        color: null,
        address: '',
        payment: '',
      },
      sizes: ['XS', 'S', 'M', 'XL'],
      colors: ['Бежевый', 'Темно-зеленый', 'Изумрудный'],
      payment: ['Наложенный платеж', 'На карту'],
    };
  },
  methods: {
    submit() {
      let validate = new RegExp('^[0-9]+$');
      if (validate.test(this.userData.phone)) {
      Email.send(
        `coats@indresser.com`,
        // 'info@indresser.com',
        'sunliveua@gmail.com',
        'Заказ пальто с сайта landing.indresser.com',
        `Пользователь: ${this.userData.fullName},
        Заказал: пальто длинное,
        Размер: ${this.userData.size},
        Цвет: ${this.userData.color},
        Адресс доставки: ${this.userData.address},
        Способ оплаты: ${this.userData.payment},
        Телефон: ${this.userData.phone}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t'
      );

      // this.$http
      //   .post('https://myvuewebapp.firebaseio.com/order.json', this.userData)
      //   .then(r => console.log(r))
      //   .catch(e => console.log(e));

      this.userData = {
        fullName: '',
        phone: '',
        email: '',
        size: null,
        address: '',
        payment: ''
      };
      
      this.drawer = true

      this.$emit('closeForm');
      } else {
        alert('ВВедите корректный номер');
        this.userData.phone = '';
      }
    },
    close() {
      this.$emit('closeForm');
    }
  }
};
</script>

<style scoped lang="stylus">
.orderForm
  background-color #fff
  padding 1rem
  position relative
  width 100%
  height 100%
  h2
    font-size responsive 1rem 2rem
    text-align center
  .myButton
    height 50px
    width 200px
    padding-left 1rem
  .close
    top 2%
    right 2%

</style>