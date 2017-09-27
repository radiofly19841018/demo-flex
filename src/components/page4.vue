<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
  }
  .container.active0{
    flex-direction: row;
  }
  .container.active1{
    flex-direction: row-reverse;
  }
  .container.active2{
    flex-direction: column;
  }
  .container.active3{
    flex-direction: column-reverse;
  }
  .item{
    padding: 0 1rem;
    margin: 1rem;
    border: 0.5rem solid #43b883;
    height: 4rem;
    line-height: 3rem;
  }
  .notice{
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
  }
</style>

<template>
  <div class="page" @click="changeClass">
    <div class="notice">{{showText}}</div>
    <div class="container" :class="[itemClass]">
      <div class="item">item1</div>
      <div class="item">item2</div>
      <div class="item">item3</div>
      <div class="item">item4</div>
      <div class="item">item5</div>
      <div class="item">item6</div>
      <div class="item">item7</div>
      <div class="item">item8</div>
      <div class="item">item9</div>
      <div class="item">item10</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      itemClass: 'active0',
      notice: [
        'row',
        'row-reverse',
        'column',
        'column-reverse'
      ],
      showText: 'row'
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '主轴排列方向')
  },
  methods: {
    changeClass () {
      this.num++
      if (this.num > 3) {
        this.num = 0
      }
      this.itemClass = 'active' + this.num
      this.showText = this.notice[this.num]
    }
  }
}
</script>

