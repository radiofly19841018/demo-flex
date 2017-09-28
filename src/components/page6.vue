<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
  }
  .container.active0{
    justify-content: flex-start;
  }
  .container.active1{
    justify-content: flex-end;
  }
  .container.active2{
    justify-content: center;
  }
  .container.active3{
    justify-content: space-between;
  }
  .container.active4{
    justify-content: space-around;
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
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ],
      showText: ''
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '主轴对齐方式')
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

