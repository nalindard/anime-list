<script setup>
const props = defineProps({
    data: Object
})
console.log(props.data);
</script>

<template>
    <div :style="`background: url('${props.data.images.webp.large_image_url}')`">
        <div class="title  bg-slate-400" data-swiper-parallax="-300">Slide 1</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div class="text" data-swiper-parallax="-100">
            {{ props.data.title }} <br>
            {{ props.data.title_japanese }} <br>
            {{ props.data.score }} <br>
            {{ props.data.synopsis }} <br>
            {{ props.data.images.webp.large_image_url }}
        </div>
    </div>
</template>