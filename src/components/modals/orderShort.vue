<template>
  <v-container fluid>
    <app-form @closeForm="closeForm" :item="item"></app-form>
  </v-container>
</template>

<script>
import form from './orderForm'
  export default {
    components: {
      'app-form': form,
    },
    data () {
      return {
        item: 'Пальто легкое'
      }
    },
    methods: {
      closeForm () {
        this.$emit('closeForm');
      }
    }
  }
</script>

<style scoped>

</style>