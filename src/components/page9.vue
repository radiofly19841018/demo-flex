<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
    flex-wrap: wrap;
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
    flex-direction: row;
  }
  .container.active-orher-1{
    flex-direction: column;
  }
  .item{
    padding: 0 1rem;
    margin: 1rem;
    border: 0.5rem solid #43b883;
    min-height: 4rem;
    text-decoration: underline;
  }
  .item.item-2,.item.item-other--2{
    order: -2;
  }
  .item.item-1,.item.item-other--1{
    order: -1;
  }
  .item.item0,.item.item-other-0{
    order: 0;
  }
  .item.item1,.item.item-other-1{
    order: 1;
  }
  .item.item2,.item.item-other-2{
    order: 2;
  }
  .item.item3,.item.item-other-3{
    order: 3;
  }
  .item.item4,.item.item-other-4{
    order: 4;
  }
  .item.item5,.item.item-other-5{
    order: 5;
  }
  .item.freedom{
    color: #43b883;
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
    <div class="container" :class="[itemClassOther]" @click="changeClass">
      <div class="item item-2">item-2</div>
      <div class="item item-1">item-1</div>
      <div class="item item0">item0</div>
      <div class="item item1">item1</div>
      <div class="item item2">item2</div>
      <div class="item item3">item3</div>
      <div class="item item4">item4</div>
      <div class="item item5">item5</div>
      <div class="item freedom" :class="[itemClass]">freedom</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: -2,
      numOther: 0,
      itemClass: 'item-other--2',
      itemClassOther: 'active-orher-0',
      notice: [
        '-2',
        '-1',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      showText: '-2'
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '子项排列顺序')
  },
  methods: {
    changeClass () {
      this.num++
      if (this.num > 5) {
        this.num = -2
      }
      this.itemClass = 'item-other-' + this.num
      this.showText = this.notice[this.num + 2]
    },
    changeClassOther () {
      this.numOther++
      if (this.numOther > 1) {
        this.numOther = 0
      }
      this.itemClassOther = 'active-orher-' + this.numOther
    }
  }
}
</script>

