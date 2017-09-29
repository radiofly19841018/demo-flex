<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: grid;

    width: 800px;
    height: 800px;
    grid-template-columns: 120px 120px;
    grid-template-rows: 80px 80px;
    grid-gap: 0;
    grid-auto-columns: 80px;
    grid-auto-rows: 120px;
  }
  .item1{
  }
  .item2{
  }
  .item3{
  }
  .item4{
  }
  .item{
    background-color: #43b883;
    border: 1px solid #000000;
    font-size: 28px;
  }
  .btn-box{
    font-size: 28px;
    margin-bottom: 16px;
  }
  .btn-box span{
    margin-right: 30px;
  }

  .active0{
    grid-auto-flow: row;
  }
  .active1{
    grid-auto-flow: column;
  }
  .activeOther0{
  }
  .activeOther1{
    justify-self: start;
  }
  .activeOther2{
    justify-self: end;
  }
  .activeOther3{
    align-self: start;
  }
  .activeOther4{
    align-self: end;
  }
  .activeOther5{
  }
  .activeOther6{
  }

  .item14{
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .item23{
    grid-column-start: 2;
    grid-column-end: span 2;
    grid-row-start: 2;
    grid-row-end: span 2;
  }
  .item34{
    grid-column: 3/5;
    grid-row: 3/5;
  }
  .item45{
    grid-area: 4/4/6/6;
  }
  .item53{
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 6;
  }



</style>

<template>
  <div class="page">
    <div class="btn-box"><span @click="changeClass">排列方向</span><span @click="addItem">续一格</span><span @click="item14=!item14">续个1行4列</span><span @click="item53=!item53">续个5行3列</span><span @click="item23=!item23">续个23行23列</span><span @click="item34=!item34">续个34行34列</span><span @click="item45=!item45">续个45行45列</span><span @click=" changeClassOther">23行23列动一下</span></div>
    <div class="container" :class="[itemClass]">
      <div class="item item1" v-if="item1" @click="item1=!item1">item1</div>
      <div class="item item2" v-if="item2" @click="item2=!item2">item2</div>
      <div class="item item3" v-if="item3" @click="item3=!item3">item3</div>
      <div class="item item4" v-if="item4" @click="item4=!item4">item4</div>
      <div class="item" @click="delItem" v-for="item of items">item new</div>
      <div class="item item14" v-if="item14">item14</div>
      <div class="item item23" v-if="item23" :class="[itemClassOther]">item23</div>
      <div class="item item34" v-if="item34">item34</div>
      <div class="item item45" v-if="item45">item45</div>
      <div class="item item53" v-if="item53">item53</div>
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
      items: [],
      item1: true,
      item2: true,
      item3: true,
      item4: true,
      item14: false,
      item23: false,
      item34: false,
      item45: false,
      item53: false
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '自动生成的栅格轨迹')
  },
  methods: {
    changeClass () {
      this.num++
      if (this.num > 1) {
        this.num = 0
      }
      this.itemClass = 'active' + this.num
    },
    changeClassOther () {
      this.numOther++
      if (this.numOther > 4) {
        this.numOther = 0
      }
      this.itemClassOther = 'activeOther' + this.numOther
    },
    addItem () {
      this.items.push(' ')
    },
    delItem () {
      this.items.splice(0, 1)
    }
  }
}
</script>

