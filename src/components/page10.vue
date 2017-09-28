<style scoped>
  .page{
    height: 100%;
  }
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
    flex-wrap: wrap;
    height: 90%;
    align-items: flex-start; 
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
  .container.active0 .item.item1{
    flex-grow: 1;
  }
  .container.active0 .item.item2{
    flex-grow: 1;
  }
  .container.active0 .item.item3{
    flex-grow: 1;
  }
  .container.active0 .item.item4{
    flex-grow: 1;
  }
  .container.active1 .item.item1{
    flex-grow: 1;
  }
  .container.active1 .item.item2{
    flex-grow: 1;
  }
  .container.active1 .item.item3{
    flex-grow: 2;
  }
  .container.active1 .item.item4{
    flex-grow: 2;
  }
  .container.active2 .item.item1{
    flex-grow: 1;
  }
  .container.active2 .item.item2{
    flex-grow: 2;
  }
  .container.active2 .item.item3{
    flex-grow: 3;
  }
  .container.active2 .item.item4{
    flex-grow: 4;
  }
  .container.active3 .item.item1{
    flex-grow: 0;
  }
  .container.active3 .item.item2{
    flex-grow: 1;
  }
  .container.active3 .item.item3{
    flex-grow: 1;
  }
  .container.active3 .item.item4{
    flex-grow: 0;
  }
  .container.active4 .item.item1{
    flex-grow: 1;
  }
  .container.active4 .item.item2{
    flex-grow: 0;
  }
  .container.active4 .item.item3{
    flex-grow: 0;
  }
  .container.active4 .item.item4{
    flex-grow: 0;
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
        '1-1-1-1',
        '1-1-2-2',
        '1-2-3-4',
        '0-1-1-0',
        '1-0-0-0'
      ],
      showText: ''
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '子项放大比例')
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

