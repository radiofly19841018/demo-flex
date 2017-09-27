<style scoped>
.page{
  background-color: #ffffff;
  color: #ffffff;
  text-align: center;
}
.body-left,
.body-right{
  background-color: #0303b7;
}
.body-mid{
  background-color: #ff4d4d;
}
.page-header,
.page-footer{
  background-color: green;
  height: 3rem;
  line-height: 3rem;
}
.page-body>div{
  min-height: 3rem;
  line-height: 3rem;
}

.clearfix { 
  zoom: 1; 
} 
.clearfix:before, 
.clearfix:after { 
  display: table; 
  line-height: 0; 
  content: ""; 
} 
.clearfix:after { 
  clear: both; 
}
.page{
  position: relative;
  padding: 3rem 0;
  min-height: 100%;
}
.page-header{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.page-footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.page-body{
  height: 100%;
}
.page-body>div{
  width: 33.33333%;
  float: left;
}
</style>

<template>
  <div class="page">
    <div class="page-header">header</div>
    <div class="page-body clearfix">
      <div><div class="body-left">left</div></div>
      <div><div class="body-mid">mid
        <!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->
      </div></div>
      <div><div class="body-right">right</div></div>
    </div>
    <div class="page-footer">footer</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '三明治')
  }
}
</script>

