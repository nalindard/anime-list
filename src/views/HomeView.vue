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
  <main class="h-screen w-full flex flex-col items-center justify-center relative  color-main">
    <div class="px-6 pb-20">
      <h2 class="font-bold text-5xl color-second pb-4 text-center">Animes !</h2>
      <p class="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque quas et in aliquid
        velit distinctio culpa, dignissimos quam, fuga aperiam odit ullam unde animi. Fugiat, iusto.</p>
    </div>
    <span class="flex justify-between mt-7 p-4 mx-auto bg-main w-full absolute bottom-0 h-20 justify-self-end color-second">
      <RouterLink to="/top/anime" class="bg-main px-4 py-2 w-full text-center shadow-sm color-second">Top Anime
      </RouterLink>
      <RouterLink to="/top/manga" class="bg-main px-4 py-2 w-full text-center shadow-sm color-second">Top Manga
      </RouterLink>
      <!-- <RouterLink to="/view/details/127">Details</RouterLink> -->
      <!-- <RouterLink to="/gallery/127">Gallery</RouterLink> -->
    </span>
  </main>
  <SwiperContainer v-if="!loading" :anime="featuredAnime" :manga="featuredManga" />
</template>

<style scoped>
main{
  background-image: linear-gradient(rgba(22, 0, 39, 0),rgb(15, 0, 27));
}
</style>