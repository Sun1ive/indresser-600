<template>
  <v-container fluid>
    <v-layout>
      <!-- <v-flex>
        <img src="/static/img/long.jpg" alt="coats">
        <img src="../../assets/img/order/long.jpg" alt="coats"> 
      </v-flex> -->
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




        <v-text-field required v-model="userData.name" label="Ваше имя и фамилия"></v-text-field>
        <v-text-field required v-model="userData.adress" label="Адресс доставки"></v-text-field>
        <v-select :items="payment" v-model="userData.payment" label="Способ оплаты"></v-select>
        <!-- <v-text-field required v-model="userData.email" label="Введите Ваш e-mail"></v-text-field> -->
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
      drawer: true,
      userData: {
        fullName: '',
        phone: '',
        email: '',
        size: null,
        color: null,
        adress: '',
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
        'info@indresser.com',
        'Заказ пальто с сайта landing.indresser.com',
        `Пользователь: ${this.userData.fullName},
        Телефон: ${this.userData.phone}`,
        'mail.adm.tools',
        'coats@indresser.com',
        '3DLao3x1AC8t'
      );

      this.$http
        .post('https://myvuewebapp.firebaseio.com/order.json', this.userData)
        .then(r => console.log(r))
        .catch(e => console.log(e));

      this.userData = {
        fullName: '',
        phone: '',
        email: '',
        size: null,
        adress: '',
        payment: ''
      };

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
  padding 0 1rem

</style>