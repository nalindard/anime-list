<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <nav class="navbar shadow-md text-blue-600">
        <span class="navbar-start">
            <RouterLink :to="{ name: 'home' }">
                <i class="fa-solid fa-film"></i>
            </RouterLink>
        </span>
        <span class="navbar-center"></span>
        <span class="navbar-end flex gap-4">
            <RouterLink :to="{ name: 'search' }">Search</RouterLink>
            <RouterLink :to="{ name: 'anime' }">Anime</RouterLink>
            <RouterLink :to="{ name: 'manga' }">Manga</RouterLink>
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </span>
    </nav>
</template>
