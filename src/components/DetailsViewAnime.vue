<script setup>
const props = defineProps({
    data: Object,
    producers: Object
})


</script>

<template>
    <div class="color-main">
        <!-- {{ props.producers }} -->

        <span class="w-full flex-col m-7 text-2xl">
            <h4 class="w-full bg-trans border-title">{{ props.data.title }} </h4>
            <h4 class="w-full bg-trans border-title">{{ props.data.title_japanese }} </h4>
        </span>

        <span class="w-full flex mb-7">
            <h4 class="w-full">RANK:{{ props.data.rank }} </h4>
            <h4 class="w-full">SCORE:{{ props.data.score }} </h4>
        </span>

        <span class="w-full flex mb-7">
            <h4 class="w-full">EPISODS:{{ props.data.episodes }} </h4>
            <h4 class="w-full">DURATION:{{ props.data.duration }} </h4>
        </span>

        <span>
            <h2>-PRODUCERS TEAM-</h2>
            <h4 v-for="p in props.producers" :key="p.mal_id">
                {{ p.name }}
            </h4>
        </span>

        <p>STATUS:{{ props.data.status }} </p>
        <!-- <p>PRODUCER:{{ props.data.producers }} </p> -->
        <!-- <p>IMAGES:{{ props.data.images }} </p> -->
        <p>PUBLISHED:{{ props.data.published }} </p>
        <p>URL:{{ props.data.title_english }} </p>
        <!-- <p>URL:{{ props.data.url }}</p> -->
        <!-- <p>TRAILER:{{ props.data.trailer }}</p> -->
        <!-- <p>:{{ props.data.trailer.embed_url }}</p> -->
        <p>ARIVED:{{ props.data.aired.string }}</p>
        <!-- <iframe width="420" height="315" :src="props.data.trailer.embed_url"> -->
        <!-- </iframe> -->
        <span >
            <p class="my-7 py-7 bg-trans">{{ props.data.synopsis }} </p>
        </span>
    </div>
</template>