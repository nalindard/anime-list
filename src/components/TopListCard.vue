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
    <div @click="details(props.data.mal_id)" class="bg-red-800 h-40 bg-cover bg-center flex color-main"
        :style="`background-image: linear-gradient(to right, rgba(52, 0, 66, 0.9),rgba(52, 0, 66, 0.552)), url(${props.data.images.webp.image_url});`">
        <span class="w-1/3 h-full bg-white bg-cover"
            :style="`background-image:url(${props.data.images.webp.image_url});`">

        </span>
        <span class="w-2/3 h-full pt-4 pl-4 flex flex-col relative overflow-hidden">
            <h2>{{ props.data.title }}</h2>
            <h2>{{ props.data.title_japanese }}</h2>
            <span class="w-full bg-second absolute bottom-7">
                <h4 class="inline w-3/6">Rank: {{ props.data.rank }}</h4>
                <h4 class="inline w-3/6">Score {{ props.data.score }}</h4>
            </span>
        </span>
    </div>
</template>

<style>
a {
    color: rgba(86, 0, 0, 0.397);
}
</style>

<!-- {{ props.data.mal_id }} <br> -->
<!-- {{ props.data.images.webp.small_image_url }} -->