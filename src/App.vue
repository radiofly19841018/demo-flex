<template>
  <div id="app">
    <div id="nav-btn" @click="navShow=!navShow" :class="{active:!navShow}">
      <div class="nav-btn-inner">
        <span class="icon-arrow-down2"></span>
      </div>
    </div>
    <div id="page-nav" @click="navShow=!navShow" :class="{active:navShow}">
      <div class="nav-link-box">
        <span class="icon-arrow-up2"></span>
        <router-link :to="{name:'page1'}">page1</router-link>
        <router-link :to="{name:'page2'}">page2</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navShow: false,
      msg: 1122334
    }
  }
}
</script>

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
  }
  @font-face {
    font-family: 'icomoon';
    src:  url('./fonts/icomoon.eot?c2q9p9');
    src:  url('./fonts/icomoon.eot?c2q9p9#iefix') format('embedded-opentype'),
      url('./fonts/icomoon.ttf?c2q9p9') format('truetype'),
      url('./fonts/icomoon.woff?c2q9p9') format('woff'),
      url('./fonts/icomoon.svg?c2q9p9#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-menu3:before {
    content: "\e9bf";
  }
  .icon-menu4:before {
    content: "\e9c0";
  }
  .icon-plus:before {
    content: "\ea0a";
  }
  .icon-minus:before {
    content: "\ea0b";
  }
  .icon-checkmark:before {
    content: "\ea10";
  }
  .icon-checkmark2:before {
    content: "\ea11";
  }
  .icon-arrow-up-left2:before {
    content: "\ea39";
  }
  .icon-arrow-up2:before {
    content: "\ea3a";
  }
  .icon-arrow-up-right2:before {
    content: "\ea3b";
  }
  .icon-arrow-right2:before {
    content: "\ea3c";
  }
  .icon-arrow-down-right2:before {
    content: "\ea3d";
  }
  .icon-arrow-down2:before {
    content: "\ea3e";
  }
  .icon-arrow-down-left2:before {
    content: "\ea3f";
  }
  .icon-arrow-left2:before {
    content: "\ea40";
  }

</style>
<style scoped>
  #app {
    position: relative;
    overflow: scroll;
    font-size: 1.4rem;
    background-color: #F7F7F7;
  }
  #nav-btn {
    position: absolute;
    padding: 0.3rem;
    left: 0;
    top: -100%;
    transition: all 0.3s;
    opacity: 0.8;
  }
  #nav-btn.active{
    top: 0;
  }
  .nav-btn-inner{
    height: 3rem;
    width: 3rem;
    overflow: hidden;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
  }
  #page-nav{
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    padding: 0;
    font-size: 1.6rem;
    overflow: hidden;
    max-height: 40%;
    transition: all 0.3s;
    opacity: 0.8;
  }
  #page-nav.active{
    top: 0;
  }
  .nav-link-box{
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0 0 1rem 1rem;
    font-size: 1.6rem;
    line-height: 2rem;
  }
  .nav-link-box a{
    margin: 0 0.5rem;
    text-decoration: none;
    color: #42b983;

  }

</style>
