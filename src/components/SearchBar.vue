<script setup>
import { ref } from 'vue';

const input = ref('naruto')
const emit = defineEmits(['search'])

const send = () => emit('search', { input: input.value })

</script>

<template>
    <div>
        <form @submit.prevent="send">
            <input type="search" v-model="input" class="border">
            <button type="submit" class="border">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </div>
</template>