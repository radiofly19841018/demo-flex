<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: grid;

    width: 800px;
    height: 800px;
    grid-template-columns: 120px 120px 120px 120px;
    grid-template-rows: 80px 80px 80px 80px;
    grid-template-areas: "header header header header"
                         "left left ... right"
                         "footer footer footer footer";
    grid-gap: 0;
  }
  .item1{
    grid-area: header;
  }
  .item2{
    grid-area: left;
  }
  .item3{
    grid-area: right;
  }
  .item4{
    grid-area: footer;
  }
  .item{
    background-color: #43b883;
    border: 1px solid #000000;
    font-size: 28px;
  }
  .btn-box{
    font-size: 28px;
    margin-bottom: 10px;
  }
  .btn-box span{
    margin-right: 10px;
  }

  .active0{
    justify-content: stretch;
  }
  .active1{
    justify-content: start;
  }
  .active2{
    justify-content: end;
  }
  .active3{
    justify-content: center;
  }
  .active4{
    justify-content: space-between;
  }
  .active5{
    justify-content: space-around;
  }
  .active6{
    justify-content: space-evenly;
  }
  .activeOther0{
    align-content: stretch;
  }
  .activeOther1{
    align-content: start;
  }
  .activeOther2{
    align-content: end;
  }
  .activeOther3{
    align-content: center;
  }
  .activeOther4{
    align-content: space-between;
  }
  .activeOther5{
    align-content: space-around;
  }
  .activeOther6{
    align-content: space-evenly;
  }



</style>

<template>
  <div class="page">
    <div class="btn-box"><span @click="changeClass">列轴对齐</span><span @click="changeClassOther">行轴对齐</span><span @click="addItem">续一格</span></div>
    <div class="container" :class="[itemClass,itemClassOther]">
      <div class="item item1">header</div>
      <div class="item item2">left</div>
      <div class="item item3">right</div>
      <div class="item item4">footer</div>
      <div class="item" @click="addItem" v-for="item of items">new</div>
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
      itemClassOther: 'activeOther0',
      items: []
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '栅格项目与栅格容器对齐')
  },
  methods: {
    changeClass () {
      this.num++
      if (this.num > 6) {
        this.num = 0
      }
      this.itemClass = 'active' + this.num
    },
    changeClassOther () {
      this.numOther++
      if (this.numOther > 6) {
        this.numOther = 0
      }
      this.itemClassOther = 'activeOther' + this.numOther
    },
    addItem () {
      this.items.push(' ')
    }
  }
}
</script>

