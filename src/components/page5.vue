<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
  }
  .container.active0{
    flex-wrap: nowrap;
  }
  .container.active1{
    flex-wrap: wrap;
  }
  .container.active2{
    flex-wrap: wrap-reverse;
  }
  .item{
    padding: 0 1rem;
    margin: 1rem;
    border: 0.5rem solid #43b883;
    /*height: 4rem;*/
    line-height: 3rem;
    /*width: 6rem;*/
    word-wrap: break-word;
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
      <div class="item">item1item1item1item1item1item1item1</div>
      <div class="item">item2</div>
      <div class="item">item3</div>
      <div class="item">item4</div>
      <div class="item">item5</div>
      <div class="item">item6</div>
      <div class="item">item7</div>
      <div class="item">item8</div>
      <div class="item">item9</div>
      <div class="item">item10</div>
      <div class="item">item11</div>
      <div class="item">item12</div>
      <div class="item">item13</div>
      <div class="item">item14</div>
      <div class="item">item15</div>
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
        'nowrap',
        'wrap',
        'wrap-reverse'
      ],
      showText: ''
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '主轴换行')
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

