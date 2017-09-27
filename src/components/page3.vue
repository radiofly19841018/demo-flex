<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
  }
  .container.active{
    display: flex;
  }
  .item{
    padding: 0 1rem;
    margin: 1rem;
    border: 0.5rem solid #43b883;
    height: 4rem;
    line-height: 3rem;
  }
</style>

<template>
  <div class="page" @click="flex=!flex">
    <div class="container" :class="{active:flex}">
      <div class="item">item1</div>
      <div class="item">item2</div>
      <div class="item">item3</div>
      <div class="item">item4</div>
      <div class="item">item5</div>
      <div class="item">item6</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flex: false
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '基础结构')
  }
}
</script>

