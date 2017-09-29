<style scoped>
  .container{
    padding: 10px;
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: grid;

    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: [row1-start] 100px [row1-end row2-start] 100px [row2-end row3-start] 100px [row3-end] 100px;
    grid-template-areas: "header header header header"
                         "left left ... right"
                         "footer footer footer footer";

    /*grid-column-gap: 10px;*/
    /*grid-row-gap: 30px;*/
    grid-gap: 30px 10px;

  }
  .item{
    background-color: #43b883;
    border: 1px solid #000000;
    font-size: 28px;
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
  .btn-box{
    font-size: 28px;
    margin-bottom: 10px;
  }
  .btn-box span{
    margin-right: 10px;
  }

  .active0{
    justify-items: start;
  }
  .active1{
    justify-items: end;
  }
  .active2{
    justify-items: center;
  }
  .active3{
    justify-items: stretch ;
  }
  .activeOther0{
    align-items: start;
  }
  .activeOther1{
    align-items: end;
  }
  .activeOther2{
    align-items: center;
  }
  .activeOther3{
    align-items: stretch;
  }



</style>

<template>
  <div class="page">
    <div class="btn-box"><span @click="changeClass">列轴对齐</span><span @click="changeClassOther">行轴对齐</span></div>
    <div class="container" :class="[itemClass,itemClassOther]">
      <div class="item item1">header</div>
      <div class="item item2">left</div>
      <div class="item item3">right</div>
      <div class="item item4">footer</div>
      <div class="item item5">5</div>
      <div class="item item5">5</div>
      <div class="item item5">5</div>
      <div class="item item5">5</div>
      <div class="item item5">5</div>
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
      itemClassOther: 'activeOther0'
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '定义栅格线大小和栅格项目对齐')
  },
  methods: {
    changeClass () {
      this.num++
      if (this.num > 3) {
        this.num = 0
      }
      this.itemClass = 'active' + this.num
    },
    changeClassOther () {
      this.numOther++
      if (this.numOther > 3) {
        this.numOther = 0
      }
      this.itemClassOther = 'activeOther' + this.numOther
    }
  }
}
</script>

