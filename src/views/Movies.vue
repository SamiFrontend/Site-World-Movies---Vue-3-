<template>
   <!-- All categories movie -->
   <div class="container-movies">
     <section class="list-movies" v-for="(category , index ) in titles" :key="index">
        <section-movies :title="category" :dataOfMovies="$store.state.movies[category]" />
    </section>
   </div>
</template>

<script>

export default {
  data(){
     return {
        titles : []
     }
  } , 
  created(){
    // init to fetch movies from json 
    this.$store.dispatch("fetchMovies");
   // set titles in our data 
   this.titles.push( ...Object.keys( this.$store.state.movies ) ) ; 
  }
}
</script>

<style scoped >

   .list-movies{
      margin: 4rem 0 ;
   }
</style>