<template>
  <div class="page1">
    <div class="container1">
      <span>块</span>
      <span>块</span>
    </div>
    <div class="container2">
      <span>内联</span>
      <span>内联</span>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
    }
  },
  mounted () {
    this.$root.$emit('updateTitle', '第一页')
  }
}
</script>

<style>
  .page1 *{
    display: block;
  }
  .page1>*{
    /*display: block;*/
  }
  .container1{
    /*display: flex;*/
    /*display: inline-flex;*/
  }
  .container2{
    /*display: flex;*/
    /*display: inline-flex;*/
  }

</style>
