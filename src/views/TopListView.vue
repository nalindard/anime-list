<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import TopListCard from '../components/TopListCard.vue';
import { useAnimeStore } from '../stores/AnimeStore';
const route = useRoute()

const animeStore = useAnimeStore()
animeStore.getTopList('anime')
animeStore.getTopList('manga')

const topList = ref([])
const type = ref('')
const loadingList = ref()

if (route.params.list === 'anime') {
    type.value = 'anime'
    loadingList.value = 'topAnimeLoading'
} else {
    type.value = 'manga'
    loadingList.value = 'topMangaLoading'
}

const loading = ref(true)


if (type.value === 'anime') {
    let intervelID = setInterval(() => {
        let Aloading = animeStore.topAnimeLoading ? true : false

        if (!Aloading) {
            clearInterval(intervelID)
            loading.value = false
            topList.value = animeStore.topAnime
        }
    }, 100);
}

if (type.value === 'manga') {
    let intervelID = setInterval(() => {
        let Aloading = animeStore.topMangaLoading ? true : false

        if (!Aloading) {
            clearInterval(intervelID)
            loading.value = false
            topList.value = animeStore.topManga
        }
    }, 100);
}





</script>

<template>
    <div v-if="!loading">
        <h2 class="font-bold text-4xl text-pink-600">This is Top list page</h2>
        <h2 class="font-bold text-4xl text-pink-600">{{ route.params.list }}</h2>
        <!-- {{ topList }} -->
        <div v-for="i in topList" :key="i.mal_id" class="pt-8">
            <TopListCard :data="i" :type="type" />
        </div>
    </div>
    <div v-else>
        Loading
    </div>
</template>