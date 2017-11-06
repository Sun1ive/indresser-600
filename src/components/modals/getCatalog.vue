<template>
  <v-container fluid class="catalogModal">
    <v-layout justify-center align-center>
      <v-form class="Form" @submit.prevent="submit">
        <v-text-field type="email" required v-model="user.email" label="Введите Ваш e-mail"></v-text-field>
        <button type="submit" class="myButton">Отправить</button>
      </v-form>
    </v-layout>
      <div class="close" @click="closeForm"></div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: ''
      }
    };
  },
  methods: {
    submit() {
      if (this.user.email !== undefined && this.user.email !== '') {
        setTimeout(() => {
          window.open('https://landing.indresser.com/coats.pdf', '_blank');
        }, 200);

        this.$http
          .post('https://myvuewebapp.firebaseio.com/catalog.json', this.user)
          .then(r => console.log(r))
          .catch(e => console.log(e));

        Email.send(
          `coats@indresser.com`,
          'info@indresser.com',
          'Заказ каталога с сайта landing.indresser.com',
          `Почта: ${this.user.email}`,
          'mail.adm.tools',
          'coats@indresser.com',
          '3DLao3x1AC8t'
        );

        this.email = '';
        this.$emit('closeForm');
      } else {
        console.log(this.email);
      }
    },
    closeForm() {
      this.$emit('closeForm');
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../stylus/custom';

.catalogModal {
  background-color: #fff;
  position: relative;

  .Form {
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
}
</style>