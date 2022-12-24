<script setup>
const props = defineProps({
    data: Object
})
</script>

<template>
    <div>
        <p>{{ props.data.episodes }} </p>
        <p>{{ props.data.duration }} </p>
        <p>{{ props.data.producers }} </p>
        <p>{{ props.data.images }} </p>
        <p>{{ props.data.published }} </p>
        <p>{{ props.data.rank }} </p>
        <p>{{ props.data.score }} </p>
        <p>{{ props.data.status }} </p>
        <p>{{ props.data.synopsis }} </p>
        <p>{{ props.data.title }} </p>
        <p>{{ props.data.title_japanese }} </p>
        <p>{{ props.data.title_english }} </p>
        <p>{{ props.data.url }}</p>
        <p>{{ props.data.trailer }}</p>
        <p>{{ props.data.trailer.embed_url }}</p>
        <p>{{ props.data.aired.string }}</p>
        <!-- <iframe width="420" height="315" :src="props.data.trailer.embed_url"> -->
        <!-- </iframe> -->
    </div>
</template>