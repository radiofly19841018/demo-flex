<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
    flex-wrap: wrap;
    height: 60rem;
  }
  .container.active0{
    align-content: stretch;
  }
  .container.active1{
    align-content: flex-start;
  }
  .container.active2{
    align-content: flex-end;
  }
  .container.active3{
    align-content: center;
  }
  .container.active4{
    align-content: space-between;
  }
  .container.active5{
    align-content: space-around;
  }
  .container.active-orher-0{
    align-items: stretch;
  }
  .container.active-orher-1{
    align-items: flex-start;
  }
  .container.active-orher-2{
    align-items: flex-end;
  }
  .container.active-orher-3{
    align-items: center;
  }
  .container.active-orher-4{
    align-items: baseline;
  }
  .item{
    padding: 0 1rem;
    margin: 1rem;
    border: 0.5rem solid #43b883;
    min-height: 4rem;
    text-decoration: underline;
  }
  .item.item1,.item.item6,.item.item11{
    font-size: 2rem;
  }
  .item.item2,.item.item7,.item.item12{
    font-size: 6rem;
  }
  .item.item3,.item.item8,.item.item13{
    font-size: 3rem;
  }
  .item.item4,.item.item9,.item.item14{
    font-size: 5rem;
  }
  .item.item5,.item.item10,.item.item15{
    font-size: 4rem;
  }
  .notice{
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
  }
</style>

<template>
  <div class="page">
    <div class="notice" @click="changeClassOther">{{showText}}</div>
    <div class="container" :class="[itemClass,itemClassOther]" @click="changeClass">
      <div class="item item1">item1</div>
      <div class="item item2">item2</div>
      <div class="item item3">item3</div>
      <div class="item item4">item4</div>
      <div class="item item5">item5</div>
      <div class="item item6">item6</div>
      <div class="item item7">item7</div>
      <div class="item item8">item8</div>
      <div class="item item9">item9</div>
      <div class="item item10">item10</div>
      <div class="item item11">item11</div>
      <div class="item item12">item12</div>
      <div class="item item13">item13</div>
      <div class="item item14">item14</div>
      <div class="item item15">item15</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 0,
      numOther: 0,
      itemClass: 'active0',
      itemClassOther: 'active-orher-0',
      notice: [
        'stretch',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ],
      showText: 'stretch'
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '多根轴线轴对齐方式')
  },
  methods: {
    changeClass () {
      this.num++
      if (this.num > 5) {
        this.num = 0
      }
      this.itemClass = 'active' + this.num
      this.showText = this.notice[this.num]
    },
    changeClassOther () {
      this.numOther++
      if (this.numOther > 4) {
        this.numOther = 0
      }
      this.itemClassOther = 'active-orher-' + this.numOther
    }
  }
}
</script>

