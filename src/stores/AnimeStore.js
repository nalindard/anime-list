import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchFromAPI } from '../helpers/FetchFrom'
import { checkStorage, getStorage, setStorage } from '../helpers/sessionStorage'

export const useAnimeStore = defineStore('anime', () => {
  // State,

  // Top list
  const topAnimeList = ref([])
  const topMangaList = ref([])
  const topAnimeListLoading = ref(true)
  const topMangaListLoading = ref(true)

  // Recent/Recommend list
  const recentAnimeList = ref([])
  const recentMangaList = ref([])
  const recentAnimeListLoading = ref(true)
  const recentMangaListLoading = ref(true)

  // Random list
  const randomAnimeList = ref([])
  const randomMangaList = ref([])
  const randomAnimeListLoading = ref(true)
  const randomMangaListLoading = ref(true)

  // Actions,
  const getTopList = async AorM => {
    let str = `top${AorM}`

    if (checkStorage(str)) {
      if (AorM === 'anime') {
        setValues(topAnimeList, topAnimeListLoading, str)
        // console.log('From top: ', topAnimeList.value.data)
      } else {
        setValues(topMangaList, topMangaListLoading, str)
        // console.log('From top: ', topMangaList.value.data)
      }
    } else {
      const res = await fetchFromAPI(`top/${AorM}`)
      setStorage(str, res)
      if (AorM === 'anime') {
        setValues(topAnimeList, topAnimeListLoading, str)
      } else {
        setValues(topMangaList, topMangaListLoading, str)
      }
    }
  }

  function setValues(item, loadingItem, str) {
    item.value = getStorage(str)
    loadingItem.value = false

    // console.log(item.value.data, loadingItem.value);
  }

  const getRecentList = async AorM => {
    // console.log('got a request recent list  ', AorM)

    let str = `recent${AorM}`
    if (checkStorage(str)) {
      // console.log('Items in store: ', getStorage(str))
      if (AorM === 'anime') {
        setValues(recentAnimeList, recentAnimeListLoading, str)
        // console.log('From top: ', recentAnimeList.value.data)
      } else {
        setValues(recentMangaList, recentMangaListLoading, str)
        // console.log('From top: ', topMangaList.value.data)
      }
    } else {
      const res = await fetchFromAPI(`recommendations/${AorM}`)
      // console.log(res)
      setStorage(str, res)
      if (AorM === 'anime') {
        setValues(recentAnimeList, recentAnimeListLoading, str)
        // console.log('From top: ', recentAnimeList.value.data)
      } else {
        setValues(recentMangaList, recentMangaListLoading, str)
        // console.log('From top: ', topMangaList.value.data)
      }
    }
  }

  const getRandomList = async AorM => {
    // console.log('got a request random list  ', AorM)

    let str = `random${AorM}`
    if (checkStorage(str)) {
      // console.log('Items in store: ', getStorage(str))
      if (AorM === 'anime') {
        setValues(randomAnimeList, randomAnimeListLoading, str)
        // console.log('From top: ', randomAnimeList.value.data)
      } else {
        setValues(randomMangaList, randomMangaListLoading, str)
        // console.log('From top: ', randomMangaList.value.data)
      }
    } else {
      const res = await fetchFromAPI(`random/${AorM}`)
      // console.log(res)
      setStorage(str, res)
      if (AorM === 'anime') {
        setValues(randomAnimeList, randomAnimeListLoading, str)
        // console.log('From top: ', randomAnimeList.value.data)
      } else {
        setValues(randomMangaList, randomMangaListLoading, str)
        // console.log('From top: ', randomMangaList.value.data)
      }
    }
  }

  // Getters,
  const topAnime = computed(() => topAnimeList.value.data)
  const topAnimeLoading = computed(() => topAnimeListLoading.value)
  const topManga = computed(() => topMangaList.value.data)
  const topMangaLoading = computed(() => topMangaListLoading.value)

  const recentAnime = computed(() => recentAnimeList.value.data)
  const recentAnimeLoading = computed(() => recentAnimeListLoading.value)
  const recentManga = computed(() => recentMangaList.value.data)
  const recentMangaLoading = computed(() => recentMangaListLoading.value)

  const randomAnime = computed(() => randomAnimeList.value)
  const randomAnimeLoading = computed(() => randomAnimeListLoading.value)
  const randomManga = computed(() => randomMangaList.value)
  const randomMangaLoading = computed(() => randomMangaListLoading.value)

  // Return store----------
  return {
    getTopList,
    getRecentList,
    getRandomList,
    topAnime,
    topManga,
    recentAnime,
    recentManga,
    randomAnime,
    randomManga,
    topAnimeLoading,
    topMangaLoading,
    recentAnimeLoading,
    recentMangaLoading,
    randomAnimeLoading,
    randomMangaLoading,
  }
})
