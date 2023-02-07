<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    data: Object
})

const router = useRouter()

const details = (id) => router.push({ name: 'details', params: { id: id }, query: { type: 'anime' } })

</script>

<template>
    <div @click="details(props.data.mal_id)" class="my-4 bg-cover flex items-center w-full h-28" :style="`background-image: linear-gradient(to right, rgba(52, 0, 66, 0.9),rgba(52, 0, 66, 0.552)),url('${ props.data.images.webp.image_url }');`">
        <h2 class="w-full text-center text-4xl font-bold color-main">
            {{ props.data.title }}
        </h2>
    </div>
</template>
<!-- {{ props.data.url }} -->
<!-- <img :src="props.data.images.webp.small_image_url" alt="thumb" class="w-20"> -->
<!-- {{ props.data.images.webp.small_image_url }} -->
<!-- {{ props.data.mal_id }} -->