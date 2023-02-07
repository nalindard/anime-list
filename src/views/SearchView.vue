<script setup>
import { ref, watch } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import SearchResultCard from '../components/SearchResultCard.vue';
import { fetchFromAPI } from '../helpers/FetchFrom'


const results = ref([])
const loaded = ref(false)

const searchFor = async (i) => {
    loaded.value = false
    const res = await fetchFromAPI(`anime`, { q: i.input })
    results.value = await res
    loaded.value = true
}
watch(results, () => console.log(results.value.data))

</script>

<template>
    <div class="pt-20 color-main px-6 min-h-screen w-full">
        <h2 class="font-bold text-4xl pb-7">Search name...</h2>
        <SearchBar @search="searchFor" />
        <div v-if="loaded" class="pb-7">
            <div v-for="i in results.data" :key="i.mal_id" class="flex flex-wrap">
                <SearchResultCard :data="i" />
            </div>
        </div>
    </div>
</template>
<!-- https://api.jikan.moe/v4/anime?q=bleach -->