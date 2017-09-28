<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
  }
  .container.active0 .item{
    flex-shrink: 0;
  }
  .container.active1 .item1{
    flex-shrink: 0;
  }
  .container.active2 .item1{
    flex-shrink: 0;
  }
  .container.active2 .item2{
    flex-shrink: 1;
  }
  .container.active2 .item3{
    flex-shrink: 6;
  }
  .container.active3 .item1{
    flex-shrink: 0;
  }
  .container.active3 .item2{
    flex-shrink: 1;
  }
  .container.active3 .item3{
    flex-shrink: 2;
  }
  .container.active4 .item{
    flex-shrink: 1;
  }
  .container.active4 .item{
    flex-shrink: 4;
  }
  .item{
    padding: 0 1rem;
    margin: 1rem;
    border: 0.5rem solid #43b883;
    height: 4rem;
    line-height: 3rem;
    width: 25rem;
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
        '0-0-0',
        '0-1-1',
        '0-1-6',
        '0-1-2',
        '1-1-1',
        '4-4-4'
      ],
      showText: ''
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '子项缩小')
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

