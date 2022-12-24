<script setup>

const props = defineProps({
    rate: Number
})

// const rate = computed(()=>Math.round((props.rate*10)/5)*0.5)
// const rate = computed(()=>Math.round((props.rate)))
// const count =10

</script>

<template>
    {{ props }}
    <div class="rating rating-sm rating-half pointer-events-none">
        <input type="radio" name="rating-10" class="rating-hidden" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-2" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-2" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-2" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-2" checked />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-1" />
        <input type="radio" class="bg-green-500 mask mask-star-2 mask-half-2" />
    </div>

</template>
