<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    data: Object
})

const router = useRouter()

const details = (id) => router.push({ name: 'details', params: { id: id }, query: { type: 'manga' } })

</script>

<template>
    <div @click="details(props.data.mal_id)" class="bg-purple-500 p-4 m-4">

        <br>
        {{ props.data.title }}
        <br>
        {{ props.data.mal_id }}
        <br>
        {{ props.data.images.webp.small_image_url }}
        <br>
        {{ props.data.url }}
        <img :src="props.data.images.webp.small_image_url" alt="thumb" class="w-20">
    </div>
</template>