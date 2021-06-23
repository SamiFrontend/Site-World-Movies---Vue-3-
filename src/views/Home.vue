<template>
  <section class="home-section">
    <div class="container">
      <div class="home-top">
        <h1 class="title">World Movies</h1>
        <p class="para">
          world movie can you are show last movie in world movies and we are
          available last movies and old movies , with world movie just keep
          going with interesting
        </p>
      </div>

      <div class="search-content">
        <search-movies />
      </div>
    </div>

    <div class="card-categ">
      <card-categ v-for="categorie in categories" :key="categorie.id" :categorie="categorie" />
    </div>
  </section>

  <section class="list-movies">
     <section-movies :title="'last Movies'" :dataOfMovies="lastMovies()" />
  </section>


  <section class="list-movies">
     <section-movies :title="'Most Watch'" :dataOfMovies="mostWatched()" />
  </section>


  <div class="content-button">
    <button class="btn btn-primary">
       Get More Movie
    </button>
  </div>
</template>

<script>
import CardCateg from "@/components/cardCategories.vue";
import { mapActions  , mapGetters  } from 'vuex' ; 

export default {
  data: function () {
    let romance = "romance" ; 
    let horror = "horror" ; 
    let action = "action" ; 
    let drama = "drama" ; 

    return {
      categories: [
        {
          id: 1 ,
          title: `${romance}`,
          image: `${romance}.png`,
          link: `/movies/${romance}`,
        },
        {
          id: 2 ,
          title: `${drama}`,
          image: `${drama}.jpg`,
          link: `/movies/${drama}`,
        },
        {
        id: 3 ,
          title: `${action}`,
          image: `${action}.jpg`,
          link: `/movies/${action}`,
        },
        {
          id: 4 , 
          title: `${horror}`,
          image: `${horror}.jpg`,
          link: `/movies/${horror}`,
        },
        
      ],
      movies : [] ,
    };
  },
  components: {
    "card-categ": CardCateg,
  },
  methods : {
    ...mapActions(["fetchMovies"]) ,
    ...mapGetters(["getMovies" , "mostWatched" , "lastMovies"]) ,
  }, 
  computed : {
  }, 
  created(){
    // init to fetch movies from json 
    this.$store.dispatch("fetchMovies");
  }
};
</script>


<style lang="scss" scoped>
@import "@/scss/abstract/variable.scss";


.content-button{
  display: flex ;
  justify-content: center ;
  padding: 2rem 0  5rem ;
  button{
    font-size: 17px ;
    padding: 1em  2em ;
    cursor: pointer ;
  }
}

.home-top,
.search-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-top {
  padding: 3em 0;
  .title {
    font-size: $heading;
    margin: 0;
  }

  .para {
    font-size: $para;
    color: $txt-second;
    flex: 1;
    max-width: 800px;
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 2;
    font-weight: 300;
  }
}

.search-content {
  flex: 1;
  max-width: 800px;
  margin: 2rem auto;
}

.card-categ{
  display: flex ; 
  justify-content: center ;
  padding: 2em 0 ;
  & > * {
    margin: 0 1em ;
  }
}


.list-movies{
  margin: 3rem 0 ;
}

</style>