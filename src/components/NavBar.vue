<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const nav_links = ref(null)

function toogleNav() {
    nav_links.value = nav_links.value === null ? 'toogle-hide' : null
    console.log('clicked');
}

// window.onscroll = function () {
//     // print "false" if direction is down and "true" if up
//     //   console.log(this.oldScroll > this.scrollY);
//     if (this.oldScroll > this.scrollY) { n.value = '' } else { n.value = 'nav-hide' }
//     this.oldScroll = this.scrollY;
// }

</script>


<template>
    <nav class="fixed top-0 w-full h-16 z-[999] flex items-center justify-between pl-4 mbg backdrop-blur-sm bg-main color-second b-b">
        <!-- logo -->
        <span class="z-[1000]">
            <RouterLink :to="{ name: 'home' }">
                <h2 class="uppercase text-2xl font-semibold color-second">Anime??</h2>
            </RouterLink>
        </span>
        <!-- Links -->
        <div :class="nav_links" id="links" class="flex flex-col items-end w-full fixed top-[-16rem] right-0 ">
            <span class="flex flex-col w-full items-center h-48 justify-evenly mbg rounded-b-3xl mt-16 backdrop-blur-sm bg-main ">
                <RouterLink :to="{ name: 'search' }" class="h-full uppercase color-second">Search</RouterLink>
                <RouterLink :to="{ name: 'anime' }" class="h-full uppercase  color-second">Anime</RouterLink>
                <RouterLink :to="{ name: 'manga' }" class="h-full uppercase  color-second">Manga</RouterLink>
                <RouterLink :to="{ name: 'about' }" class="h-full uppercase  color-second">About</RouterLink>
            </span>
            <span class="h-16 pt-2 pr-4">
                <button @click="toogleNav" class="mbg rounded-full h-12 w-12 bg-main">
                    <i class="fa-solid fa-bars "></i>
                    <!-- <i class="fa-solid fa-xmark "></i> -->
                </button>
            </span>
        </div>
    </nav>
</template>

<style scoped>
#links {
    transition: .4s;
}

.toogle-hide {
    top: 0rem;
}

/* .mbg {
    background-color: #00000050;
} */
</style>