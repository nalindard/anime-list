<script setup>
const props = defineProps({
    data: Object
})

</script>

<template>
    <div>
        {{ props.data.mal_id }}
        <p>{{ props.data.chapters }} </p>
        <p>{{ props.data.authors }} </p>
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
    </div>
</template>