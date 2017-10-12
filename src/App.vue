<style>
  *{
    box-sizing: border-box;
  }
  html,
  body{
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-size: 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #333333;
    height: 100%;
  }
  #car-info{
    padding: 2rem;
    font-size: 2rem;
  }
  .car-title{
    margin-bottom: 1rem;
  }
  .text-center{
    text-align: center;
  }
  .input-row{
    margin-bottom: 0.8rem;
    display: flex;
  }
  .input-row input{
    display: inline-block;
    padding: 0.5rem;
    border: 1px solid #eeeeee;
    height: 3rem;
    line-height: 2rem;
    font-size: 1.4rem;
    flex-grow: 1;
  }
  .input-row label{
    display: inline-block;
    width: 5em;
    line-height: 3rem;
    font-size: 1.4rem;
  }
  .input-row.button-box{
    text-align: center;
    justify-content: center;
  }
  .input-row button{
    width: 6em;
    height: 3rem;
    margin: 0 1rem;
    display: inline-block;
    border: 1px solid #ffffff;
  }

  
</style>

<template>
<form method="post" action="/" id="car-info">
  <div class="text-center car-title">
    车辆信息录入
  </div>
  <div class="input-row">
    <label for="device_id">设备号</label>
    <input name="device_id" type="text" />
  </div>

  <div class="input-row">
    <label for="car_num">车牌号</label>
    <input name="car_num" type="text" />
  </div>
  <div class="input-row">
    <label for="pin_pai">品牌</label>
    <input name="pin_pai" type="text" />
  </div>
  <div class="input-row">
    <label for="che_xing">车型</label>
    <input name="che_xing" type="text" />
  </div>
  <div class="input-row">
    <label for="engine">发动机</label>
    <input name="engine" type="text" />
  </div>
  <div class="input-row button-box">
    <button type="reset">重置</button>
    <button type="submit">提交</button>
  </div>
</form>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navShow: false,
      pageTitle: ''
    }
  },
  created () {
    this.$root.$on('updateTitle', this.changeTitle)
  },
  methods: {
    changeTitle (val) {
      this.pageTitle = val
    }
  }
}
</script>

