<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()


</script>

<template>
    <div>
        <h2 class="font-bold text-4xl text-pink-600" >This is Gallery page</h2>     
        <h2 class="font-bold text-4xl text-pink-600" >{{ route.params.id }}</h2>     
    </div>
</template>