<style scoped>
  .container{
    padding: 10px;
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 100px 100px 100px 100px;
  }
  .container.active{
  }
  .item{
    background-color: #43b883;
    border: 1px solid #000000;
  }
</style>

<template>
  <div class="page" @click="add">
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item" v-for="item of items"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flex: false,
      items: []
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', 'GRID')
  },
  methods: {
    add () {
      this.items.push(' ')
    }
  }
}
</script>

