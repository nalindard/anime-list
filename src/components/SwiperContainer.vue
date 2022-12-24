<script setup>
import { Swiper } from 'swiper/vue'
import { SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Parallax } from 'swiper'
import SwiperCell from './SwiperCell.vue';

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const modules = [Pagination, Navigation, Parallax]
const props = defineProps({
    anime: Object,
    manga: Object,
})

</script>

<template>
    <Swiper :style="{ '--swiper-navigation-color': '#fff', }" :speed="600" :parallax="true" :navigation="true"
        :modules="modules" class="mySwiper">
        <SwiperSlide>
            <SwiperCell :data="props.anime" />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell :data="props.manga" />
        </SwiperSlide>
    </Swiper>
</template>