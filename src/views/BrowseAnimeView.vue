<script setup>
import { ref } from 'vue';
import { useAnimeStore } from '../stores/AnimeStore';
import AnimeCard from '../components/AnimeCard.vue';

const animeStore = useAnimeStore()
animeStore.getRecentList('anime')

const recent = ref([])

const loading = ref(true)

let intervelID = setInterval(() => {
    let Aloading = animeStore.recentAnimeLoading ? true : false

    console.log('Loading --> ', animeStore.recentAnimeLoading);
    if (!Aloading) {
        clearInterval(intervelID)
        loading.value = false
        recent.value = animeStore.recentAnime
    }
}, 100);




</script>

<template>
    <div v-if="!loading">
        <h2 class="font-bold text-4xl text-pink-600">This is Browse Anime page</h2>

        <h2 class="font-bold text-4xl text-pink-600">Recent</h2>
        <div v-for="i in recent" :key="i.mal_id" class="pt-7 flex w-full flex-wrap">
            <AnimeCard :data="i.entry[0]" />
            <AnimeCard :data="i.entry[1]" />
        </div>
    </div>
    <div v-else>
        Loading
    </div>
</template>