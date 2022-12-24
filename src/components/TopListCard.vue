<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    data: Object,
    type: String
})
const router = useRouter()

const details = (id) => router.push({ name: 'details', params: { id: id }, query: { type: props.type } })

</script>

<template>
    <div @click="details(props.data.mal_id)">
        <h2>card</h2>
        {{ props.data.mal_id }} <br>
        {{ props.data.title }} <br>
        {{ props.data.title_japanese }} <br>
        {{ props.data.rank }} <br>
        {{ props.data.score }} <br>
        {{ props.data.images.webp.small_image_url }}
    </div>
</template>