<template>
    <div class="container title-cards">
    <h1 class="title">{{ title }}</h1>
  </div>
  <carousel :itemsToShow="5" >
    <slide v-for="(movie, index) in dataOfMovies" :key="index">
      <card-movie :dataOfMovie="movie" class="carousel__item" />
    </slide>
  <template >
    <Navigation />
  </template>
  </carousel>

</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import cardMovie from "@/components/cardMovie.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: "sectionMovies",
  components: {
    Carousel,
    Slide,
    Navigation ,
    cardMovie,
  },
  props: ["title", "dataOfMovies"],
  data: () => ({
    // carousel settings
    settings: {
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
  methods: {},
})
;
</script>

<style lang="scss" scoped>


.title-cards {
  margin-bottom: 2em;
  .title {
    font-weight: 400;
    font-size: 25px;
    letter-spacing: 0.8px;
    text-transform: capitalize;
  }
}

  

</style>