<script setup>
import { Swiper } from 'swiper/vue'
import { SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Lazy  } from 'swiper'
import SwiperCell from './SwiperCell.vue';

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/lazy"

const modules = [Pagination, Navigation, Lazy]

</script>

<template>
    <Swiper :slides-per-view="4" :space-between="30" :modules="modules" :pagination="{ clickable: true }"
        :navigation="true" :loop="true" :lazy="true" class="mySwiper">
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
        <SwiperSlide>
            <SwiperCell />
        </SwiperSlide>
    </Swiper>
</template>