<template >
  <div id="app" data-dpr="2">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate:function(){
    let Ele = document.documentElement;
    let fontEle = document.createElement('style');
    let deviceWidth = Ele.clientWidth;
    let dpr = window.devicePixelRatio;
    let rem = deviceWidth * dpr /10;
    let metaEle = document.querySelector('meta[name="viewport"]');
    metaEle.setAttribute('content','width='+deviceWidth * dpr+',initial-scale='+1/dpr+',maximum-scale='+1/dpr+',minimum='+1/dpr+',user-scale=no');
    Ele.firstElementChild.appendChild(fontEle);
    fontEle.innerHTML = 'html{font-size:'+rem+'px}';
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
  font-size:24px;
}
</style>
