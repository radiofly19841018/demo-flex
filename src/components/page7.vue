<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
  }
  .container.active0{
    align-items: stretch;
  }
  .container.active1{
    align-items: flex-start;
  }
  .container.active2{
    align-items: flex-end;
  }
  .container.active3{
    align-items: center;
  }
  .container.active4{
    align-items: baseline;
  }
  .item{
    padding: 0 1rem;
    margin: 1rem;
    border: 0.5rem solid #43b883;
    min-height: 4rem;
    text-decoration: underline;
  }
  .item.item1{
    font-size: 2rem;
  }
  .item.item2{
    font-size: 6rem;
  }
  .item.item3{
    font-size: 3rem;
  }
  .item.item4{
    font-size: 5rem;
  }
  .item.item5{
    font-size: 4rem;
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
      <div class="item item1">item1</div>
      <div class="item item2">item2</div>
      <div class="item item3">item3</div>
      <div class="item item4">item4</div>
      <div class="item item5">item5</div>
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
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'baseline'
      ],
      showText: ''
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '交叉轴对齐方式')
    this.showText = this.notice[0]
  },
  methods: {
    changeClass () {
      this.num++
      if (this.num > (this.notice.length - 1)) {
        this.num = 0
      }
      this.itemClass = 'active' + this.num
      this.showText = this.notice[this.num]
    }
  }
}
</script>

