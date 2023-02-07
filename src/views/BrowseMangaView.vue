<script setup>
import { ref } from 'vue';
import MangaCard from '../components/MangaCard.vue';
import { useAnimeStore } from '../stores/AnimeStore';

const animeStore = useAnimeStore()
animeStore.getRecentList('manga')

const recent = ref([])

const loading = ref(true)

let intervelID = setInterval(() => {
    let Aloading = animeStore.recentMangaLoading ? true : false

    console.log('Loading --> ', animeStore.recentMangaLoading);
    if (!Aloading) {
        clearInterval(intervelID)
        loading.value = false
        recent.value = animeStore.recentManga
    }
}, 100);



</script>

<template>
    <div v-if="!loading" class="pt-20 px-6">
        <h2 class="font-bold text-4xl color-second">Browse Manga</h2>
        <div v-for="i in recent" :key="i.mal_id" class="pt-7 flex w-full flex-wrap">
            <MangaCard :data="i.entry[0]" />
            <MangaCard :data="i.entry[1]" />
        </div>
    </div>
    <div v-else>
        Loading
    </div>
</template>