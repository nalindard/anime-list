<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { fetchFromAPI } from '../helpers/FetchFrom'
import DetailsViewAnime from '../components/DetailsViewAnime.vue'
import DetailsViewManga from '../components/DetailsViewManga.vue'

const route = useRoute()

const results = ref([])
const content = ref('')
const loading = ref(true)

const searchFor = async (id, type) => {
    const res = await fetchFromAPI(`${type}/${id}/full`)
    results.value = await res
    console.log(results.value);
    loading.value = false
}
// searchFor()


onMounted(() => {
    let id = route.params.id
    let type = route.query.type
    content.value = type
    searchFor(id, type)
})

</script>

<template>
    <div v-if="!loading" class="pt-20 px-6">
        <h2 class="font-bold text-4xl color-second">This is Details page</h2>
        <!-- <h2 class="font-bold text-4xl text-pink-600">{{ route.params.id }}</h2> -->
        <div>
            <DetailsViewAnime v-if="content === 'anime'" :data="results.data" :producers="results.data.producers"/>
            <DetailsViewManga v-if="content === 'manga'" :data="results.data" />
        </div>
    </div>
</template>
<!-- https://api.jikan.moe/v4/anime/{id}/full -->
