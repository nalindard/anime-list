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
    <!-- <div @click="details(props.data.mal_id)" class="bg-red-600 mt-4 h-52 w-full bg-center bg-cover" :style="`background:url(${props.data.images.webp.image_url})`"> -->
    <div @click="details(props.data.mal_id)" class="bg-trans mt-7 min-h-52 w-full relative flex">
        <figure class="h-full w-4/12">
            <img :src="props.data.images.webp.image_url" alt="thumb" class="h-full">
        </figure>
        <div class="w-8/12 px-4 pt-4 relative flex flex-col justify-between">
            <span class="h-fit">
                <h2 class="font-bold text-base">{{ props.data.title }}</h2>
                <h2 class="font-semibold text-sm my-2">{{ props.data.title_japanese }}</h2>
            </span>

            <span class="w-full pt-4">
                <span class="flex w-full bg-second mb-2">
                    <p class="text-xs w-full">DURATION: {{ props.data.duration }}</p>
                    <p class="text-xs w-full">RANK:{{ props.data.rank }}</p>
                </span>
                <span class="flex w-full bg-second mb-2">
                    <p class="text-xs font-bold w-full">SCORE: {{ props.data.score }}</p>
                    <span class="w-full">
                        <StarRating :rate="props.data.score" />
                    </span>
                </span>
            </span>
        </div>
    </div>
</template>
