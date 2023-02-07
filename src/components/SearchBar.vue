<script setup>
import { ref } from 'vue';

const input = ref('naruto')
const emit = defineEmits(['search'])

const send = () => emit('search', { input: input.value })

</script>

<template>
    <div class="w-full">
        <form @submit.prevent="send">
            <input type="search" v-model="input" class="border h-8 w-10/12 color-second bg-second border-purple-600">
            <button type="submit" class="bg-second border border-purple-600 h-8 w-2/12">
                <i class="fa-solid fa-magnifying-glass m-auto"></i>
            </button>
        </form>
    </div>
</template>