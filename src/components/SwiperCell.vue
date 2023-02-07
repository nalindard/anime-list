<script setup>
const props = defineProps({
    data: Object
})
console.log(props.data);
</script>

<template>
    <div class="w-full text-purple-100 bg-trans">
        <figure class="relative"><img :src="props.data.images.webp.large_image_url" alt="car!" class="w-full" /></figure>
        <div class="pt-4 px-4">
            <h2 class="text-2xl font-bold">{{ props.data.title }}</h2>
            <h2 class="text-2xl font-bold">{{ props.data.title_japanese }}</h2>
            <!-- <p class="text-justify">{{ props.data.synopsis?.slice(0, 100) }}...</p> -->
            <p class="text-justify bg-trans mt-4">{{ props.data.synopsis }}...</p>
            <div class="justify-end">
                <button class="pointer-events-none">{{ props.data.score }}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
figure::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(255, 0, 0, 0.075),rgba(66, 0, 0, 0.74));
}
</style>