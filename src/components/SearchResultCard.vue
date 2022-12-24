<script setup>
import { useRouter } from 'vue-router';
import StarRating from './StarRating.vue';

const props = defineProps({
    data: Object
})
const router = useRouter()

const details = (id) => router.push({ name: 'details', params: { id: id }, query: { type: 'anime' } })


</script>

<template>
    <div @click="details(props.data.mal_id)" class="card card-side shadow-lg bg-pink-600 m-4 h-52 w-96 bg-center bg-cover bg-opacity-50" :style="`background:url(${props.data.images.webp.image_url})`">
        <figure class="w-full">
            <img :src="props.data.images.webp.image_url" alt="thumb" class="h-full">
        </figure>
        <div class="card-body">
            <h2 class="">{{ props.data.title }}</h2>
            <h2 class="">{{ props.data.title_japanese }}</h2>
            <p>DURATION: {{ props.data.duration }}</p>
            <span>
                <p>SCORE: {{ props.data.score }}</p>
                <p>RANK:{{ props.data.rank }}</p>
            </span>
            <StarRating :rate="props.data.score" />
        </div>
    </div>
</template>
