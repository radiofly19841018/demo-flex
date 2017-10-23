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
  <section id="gas-fee-notice">
    <input type="" name="" v-model="price">
    <br>
    {{real}}
    <br>
    {{real15}}
    <br>
    {{totle}}
    <br>
    一百
    {{hundred}}
    <br>
    五十
    {{fifty}}
    <br>
    三十
    {{thirty}}
    <br>
    二十
    {{twenty}}
    <br>
    一十
    {{ten}}
    <br>
    {{error}}
  </section>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      price: '',
      real: 0,
      real15: 0,
      totle: 0,
      hundred: 0,
      fifty: 0,
      thirty: 0,
      twenty: 0,
      ten: 0,
      error: ''
    }
  },
  created () {
    this.$watch('price', function (newVal) {
      let _val = Math.ceil(parseInt(newVal, 10) * 1.5 / 10) * 10
      if (_val > 0) {
        this.real = parseInt(newVal, 10)
        this.real15 = this.real * 1.5
        this.totle = _val
        this.error = ''
        this.getHundred(_val)
      } else {
        this.error = '请输入大于0的数字'
      }
    })
  },
  methods: {
    getHundred (val) {
      if (val / 200 >= 1) {
        this.hundred = Math.floor(val / 100)
        this.getFifty(val % 100)
      } else {
        this.hundred = 0
        this.getFifty(val)
      }
    },
    getFifty (val) {
      let result = this.numSum(val, 50)
      this.fifty = result[0]
      this.getThirty(result[1])
    },
    getThirty (val) {
      let result = this.numSum(val, 30)
      this.thirty = result[0]
      this.getTwenty(result[1])
    },
    getTwenty (val) {
      let result = this.numSum(val, 20)
      this.twenty = result[0]
      this.getTen(result[1])
    },
    getTen (val) {
      let result = this.numSum(val, 10)
      this.ten = result[0]
    },
    numSum (dividend, divisor) {
      if (dividend / divisor >= 1) {
        return [Math.floor(dividend / divisor), dividend % divisor]
      } else {
        return [0, dividend]
      }
    }
  }
}
</script>

