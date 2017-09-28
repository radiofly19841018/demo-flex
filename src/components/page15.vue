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


/*    grid-template: 1fr 1fr 1fr 1fr /
      [row1-start] 100px "header header header header" [row1-end]
      [row2-start] "left left . right" 100px [row2-end]
      [row3-start] "footer footer footer footer" 100px [row3-end]
                   100px;*/

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
</style>

<template>
  <div class="page">
    <div class="container">
      <div class="item item1">header</div>
      <div class="item item2">left</div>
      <div class="item item3">right</div>
      <div class="item item4">footer</div>
      <!-- <div class="item item5">5</div> -->
      <!-- <div class="item item5">5</div> -->
      <!-- <div class="item item5">5</div> -->
      <!-- <div class="item item5">5</div> -->
      <!-- <div class="item item5">5</div> -->
      <!-- <div class="item item5">5</div> -->
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
    this.$root.$emit('updateTitle', '定义栅格项目')
  },
  methods: {

  }
}
</script>

