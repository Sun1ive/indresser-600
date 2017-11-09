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
        <button class="myButton">Оформить заказ</button>
        <div class="close" @click="close"></div>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
.formWrapper
  padding 0 !important


.layout {
  padding: 1rem;
  background-color: #fff;
}

.flex {
  img {
    width: 100%;
    height: 100%;
    // min-width 450px
  }
}

.orderForm {
  width: 100%;
  text-align: center;
  padding: 1rem 2rem;
  max-height: 400px;
  position: relative;
  font-size: responsive 1rem 2rem;

  .myButton {
    height: 50px;
    // margin-top: 5rem;
  }

  h2 {
    font-size: responsive 1rem 2rem;
    padding 1rem 0
  }

  .close {
    background-image: url('/static/img/close.svg');
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 10px;
    opacity: 0.3;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      opacity: 0.8;
    }
  }
}

@media (max-width: 830px) {
  .orderForm {
    padding: 1rem 3rem;

    .myButton {
      font-size: responsive 1rem 1.2rem;
    }
  }
}

@media (max-width: 650px) {
  .flex {
    img {
      display: none;
    }
  }
}

@media (max-width: 430px) {
  .orderForm {
    padding: 1rem 2rem;
    min-height: 300px;

    .myButton {
      margin-top: 3rem;
    }
  }
}
</style>