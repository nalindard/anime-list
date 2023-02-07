<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

// window.addEventListener('scroll', (e)=> console.log(e))

</script>

<template >
  <!-- NavBar -->
  <div id="bg"></div>
  <NavBar />

  <!-- Page Content -->
  <div class="flex flex-col justify-between min-h-screen bg-transparent max-w-[100vw] overflow-hidden">
    <main>
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<style>
#bg{
  background-image: linear-gradient(rgba(0, 0, 0, 0.7) , rgb(0, 0, 0)),url('https://wallpapercave.com/download/dark-purple-anime-wallpapers-wp5499189');
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -10;
}
</style>