<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';

</script>

<template >
  <!-- NavBar -->
  <NavBar />

  <!-- Page Content -->
  <main class="min-h-screen">
    <RouterView />
  </main>
</template>
