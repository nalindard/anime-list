<script setup>
import SwiperCell from './SwiperCell.vue';

const props = defineProps({
    anime: Object,
    manga: Object,
})

</script>

<template>
    <div class="w-full color-main rounded-2xl flex flex-col gap-10 px-6 py-12 shadow-lg">
        <h2 class="text-2xl font-semibold border-title py-3">Featured Anime</h2>
        <SwiperCell :data="props.anime" />
        <h2 class="text-2xl font-semibold border-title py-3">Featured Manga</h2>
        <SwiperCell :data="props.manga" />
    </div>
</template>

<style scoped>
h2{
    background: linear-gradient(to right, rgba(191, 0, 255, 0.256),rgba(52, 0, 66, 0.152));
}
</style>