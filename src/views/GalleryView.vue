<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { fetchFromAPI } from '../helpers/FetchFrom'

const route = useRoute()

const results = ref([])

const searchFor = async () => {
    const res = await fetchFromAPI(`manga/137050/pictures`)
    results.value = await res
}
// searchFor()

</script>

<template>
    <div>
        <h2 class="font-bold text-4xl text-pink-600" >This is Gallery page</h2>     
        <h2 class="font-bold text-4xl text-pink-600" >{{ route.params.id }}</h2>     
        {{ results }}
    </div>
</template>
<!-- https://api.jikan.moe/v4/manga/{id}/pictures -->