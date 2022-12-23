<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <nav class="navbar shadow-md text-blue-600">
        <span class="navbar-start">
            <i class="fa-solid fa-film"></i>
        </span>
        <span class="navbar-center">navbar-center</span>
        <span class="navbar-end flex gap-4">
            <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
            <RouterLink :to="{ name: 'search' }">Search</RouterLink>
            <RouterLink :to="{ name: 'anime' }">anime</RouterLink>
            <RouterLink :to="{ name: 'manga' }">manga</RouterLink>
        </span>
    </nav>
</template>
