<template>
  <navbar/>
  <router-view/>
  <div id="bg">
    <div class="bg-mask"></div>
  </div>
  <div id="page-block"/>
</template>
<script setup>

import Navbar from '@/components/Navbar.vue'

</script>


<style lang="scss">
html, body{
  width: 100%;
  height: 100%;
  margin:0;
  padding: 0;
}
#bg{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 100vh;
  z-index: -10;
  background: url('~@/assets/images/bg.jpg');
  background-size: cover;

  .bg-mask{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 100vh;
    z-index: -8;
    background: linear-gradient(to bottom, rgba(255,255,255, .9) 0%, rgba(255,255,255, .9) 10%, rgba(220,220,220, .8) 20% )
  }
}

#app {
  font-family: 'LeroyMerlin';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-font;
}


</style>
