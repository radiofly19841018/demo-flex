<style scoped>
  .container{
    background-color: #666666;
    border: 0.5rem solid #ffffff;
    display: flex;
  }
  .item{
    padding: 0.5rem 1rem;
    margin: 1rem;
    border: 0.5rem solid #43b883;
    line-height: 3rem;
    white-space: nowrap;
    /*word-wrap: break-word;*/
    /*word-break: nowrap;*/
  }
  .notice{
    padding: 3rem 1rem 1rem;
    text-align: center;
    font-size: 2rem;
    text-align: center;
  }

  .container.container1{

  }
  .container.container1 .item{
    flex-grow: 1;
  }
  .container.container1 .item3{
    width: 30rem;
  }

  .container.container2{
    justify-content: space-between;

  }
  .container.container2 .item{
    flex-shrink: 1;
  }
  .container.container2 .item3{
    width: 50rem;
  }

  .container.container3{
    height: 50rem;
    display: flex;
    flex-direction: column;
  }
  .container.container3 .item{
    /*flex-shrink: 1;*/
  }
  .container.container3 .item2{
    flex-grow: 1;
  }
  .container.container3 .item2 .item2-inner{
    background-color: #43b883;
    height: 50%;
    border: 0.5rem solid #666666; 
  }
  .container.container3.active .item2{
    display: flex;
    flex-direction: column;
  }
  .container.container3.active .item2 .item2-inner{
    flex-grow: 1;
  }

</style>

<template>
  <div class="page">
    <div class="notice">宽度失效1</div>
    <div class="container container1">
      <div class="item item1">auto</div>
      <div class="item item2">auto</div>
      <div class="item item3">width: 30rem</div>
    </div>
    <div class="notice">宽度失效2</div>
    <div class="container container2">
      <div class="item item1" @click="text2=text2+'长'">{{text2}}</div>
      <div class="item item2">auto</div>
      <div class="item item3">width: 50rem</div>
    </div>
    <div class="notice">没有高度</div>
    <div class="container container3" :class="{active:container3active}" @click="container3active=!container3active">
      <div class="item item1">auto</div>
      <div class="item item2">
        <div class="item2-inner">item2-inner</div>
        <div class="item2-inner">item2-inner</div>
      </div>
      <div class="item item3">auto</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text2: 'auto',
      container3active: false
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '坑')
  }
}
</script>

