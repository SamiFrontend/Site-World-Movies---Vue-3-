<template>
  <header class="header-section">
    <div class="container">
      <h1 class="title-section">
        {{ this.$filters.capetalize(title) /* get parmater from url */ }} Movies
      </h1>

      <ul class="navigation-link">
        <li class="nav-item">
          <router-link to="/"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/movies"> Movies </router-link>
        </li>
        <li class="nav-item active" v-text="title"></li>
      </ul>
    </div>
  </header>

  <div class="main-section">

    <section class="list-movies">
      <section-movies :title="`${ title } Movies`" :dataOfMovies="getMovies()" />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "sectionMovie",
  data: function () {
    return {
      title: this.$route.params.category,
    };
  },
  methods : {
    ...mapActions(["fetchByCategory"]),
    ...mapGetters(["getMovies"]) 
  } , 
  created(){
    this.fetchByCategory( this.$route.params.category )  ;
  }
};
</script>

<style lang="scss">
@import '../scss/abstract/variable.scss';

.header-section{
    padding : 2rem 0 ; 
    border-bottom: 1px solid $borderColor ; 
    .title-section {
        font-size: 30px ; 
        letter-spacing: .5px ; 
    }

    .navigation-link{
        display: flex ; 
        margin-top: 2rem ;
        & > * {
            margin-right: 30px ; 
            font-size: $txt-sm ;
            font-weight: 400 ; 
            position: relative;
            &::after{
                position: absolute ;
                right: -20px ;
                top: 6px ;
                content : '' ; 
                background: url('../assets/icon/right-arrow.svg') no-repeat center ;
                background-size: cover ;
                width: 8px ;
                height: 8px ;
                opacity: .5;
            }
            a { 
            color: $primaryColor ; 
           
            }

            &.active {
                color: $txt-second  ;
                 &::after{
                background-image: none ;
                 }
            }
        }
    }
} ; 


.main-section > * {
    margin: 3rem 0;
}
</style>