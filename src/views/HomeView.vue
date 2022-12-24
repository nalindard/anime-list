<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import SwiperContainer from '../components/SwiperContainer.vue';
import { useAnimeStore } from '../stores/AnimeStore';

const animeStore = useAnimeStore()
// const { getTopList, getRandomList, getRecentList, } = storeToRefs(animeStore)

const featuredAnime = ref()
const featuredManga = ref()

const loading = ref(true)


let intervelID = setInterval(() => {
  let Aloading = animeStore.randomAnimeLoading ? true : false
  let Mloading = animeStore.randomMangaLoading ? true : false

  console.log('Loading --> ');
  if (!Aloading && !Mloading) {
    clearInterval(intervelID)
    loading.value = false
    featuredAnime.value = animeStore.randomAnime.data
    featuredManga.value = animeStore.randomManga.data

  }
}, 100);


onMounted(() => {
  animeStore.getRandomList('anime')
  animeStore.getRandomList('manga')
})


</script>

<template>
  <main>
    <h2 class="font-bold text-4xl text-pink-600">This is Home page</h2>
    <SwiperContainer v-if="!loading" :anime="featuredAnime" :manga="featuredManga" />
    <span class="pt-40 flex flex-col gap-7">
      <RouterLink to="/top/anime">Top Anime</RouterLink>
      <RouterLink to="/top/manga">Top Manga</RouterLink>
      <RouterLink to="/view/details/127">Details</RouterLink>
      <RouterLink to="/gallery/127">Gallery</RouterLink>
    </span>
  </main>
</template>
