<script setup>
import { RouterLink } from 'vue-router';
import SwiperContainer from '../components/SwiperContainer.vue';


</script>

<template>
  <main>
    <h2 class="font-bold text-4xl text-pink-600">This is Home page</h2>
    <SwiperContainer />

    <span class="pt-40 flex flex-col gap-7">
      <RouterLink to="/top/anime">Top Anime</RouterLink>
      <RouterLink to="/top/manga">Top Manga</RouterLink>
      <RouterLink to="/view/details/127">Details</RouterLink>
      <RouterLink to="/gallery/127">Gallery</RouterLink>
    </span>
  </main>
</template>
