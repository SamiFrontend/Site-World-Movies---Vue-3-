<template>
  <a class="card-movie" :href="`/movies/${dataOfMovie.type}/${dataOfMovie.id}`">
    <img class="image-card" :src="require(`../assets/movie/${dataOfMovie.img}`)" :alt="dataOfMovie.name + ' ' + dataOfMovie.type " />
    <div class="details-mv">
      <div class="head-dt">
        <p class="name-mv">{{ dataOfMovie.name }} </p>
        <span class="type-mv txt-sm"> {{ dataOfMovie.type }} </span>
      </div>
      <div class="body-dt">
        <p class="desc-mv">
          {{ dataOfMovie.description }}
        </p>
      </div>

      <div class="footer-dt">
        <div class="time-mv">
          <img class="icon-sm" src="@/assets/icon/clock.svg" alt="time" />
          <span class="txt-sm"> {{ convertMinsToHrsMins(dataOfMovie.time) }} </span>
        </div>
        <div class="like-mv">
          <img class="icon-sm" src="../assets/icon/heart.svg" alt="time" />
          <span class="txt-sm"> {{ numberWithCommas(dataOfMovie.likes) }} </span>
        </div>
        <div class="imdb-mv txt-sm">
          <span class="imdb">IMDB</span>
          <span class="evalution">{{ dataOfMovie.imdb }} </span>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import sharedMethods from '/shared/methods' ; 


export default {
  data(){
    return {
      image : '' ,
    }
  } , 
  props: ['dataOfMovie'] , 
  methods :{
    ...sharedMethods 
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/abstract/variable.scss";


.card-movie {
  width: 95%;
  min-height: 700px;
  border-radius: 5px;
  background: $thirdColor;
  cursor : pointer ; 
}

.image-card{
    height: 520px ;
    width: 100% ;
    object-fit: cover ;
}


</style>