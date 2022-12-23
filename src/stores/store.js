import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAnimeStore = defineStore('anime', () => {
  // State,
  const animeList = ref([])

  // Actions,
  const list = computed(() => {
    return animeList
  })

  // Getters,
  const getAnimeList = async () => {
    const res = await fetch('/')
    animeList.value = await res.data
  }

  return list, getAnimeList
})
