<template>
  <div class="scroll" @click="scroll">
    <div class="scrollChild"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      scroll () {
        window.scrollTo(0,0);
      }
    },
  }
</script>

<style scoped lang="stylus">
.scroll
  background-image url('/static/img/right.svg')
  width 35px
  height 35px
  position absolute
  bottom 15%
  left 35%
  color #000
  transform rotateZ(-90deg)
  cursor pointer
  .scrollChild
    background-image url('/static/img/right.svg')
    width 35px
    height 35px
    position absolute
    bottom 0
    left 35%
    color #000
    cursor pointer
</style>