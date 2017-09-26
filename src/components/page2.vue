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

.page{
  display: flex;
  min-height: 100%;
  flex-direction: column;
}
.page-body{
  display: flex;
  flex-grow: 1;
}
.page-body>div{
  flex-grow: 1;
}
</style>

<template>
  <div class="page">
    <div class="page-header">header</div>
    <div class="page-body clearfix">
      <div><div class="body-left">left</div></div>
      <div><div class="body-mid">mid</div></div>
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
    this.$root.$emit('updateTitle', 'FLEX三明治')
  }
}
</script>

