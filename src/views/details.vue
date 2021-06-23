<template>
  <section class="head-page">
    <div class="container">
      <a :href="'/movies/' + $route.params.category ">
        <span class="icon-arrow">
          <img src="../assets/icon/right-arrow.svg" />
        </span>
        <span class="text-link"> Back to {{ $route.params.category  }} Movies </span>
      </a>
    </div>
  </section>

  <section class="container">
    <div class="dt-movie">
      <div class="poster">
        <img :src="require(`../assets/movie/${targetMovie.img}`)" />
      </div>
      <div class="main-dt">
        <div class="right-detials">
          <div class="head-dt">
            <div class="info-movie">
              <span class="type-mv txt-sm"> {{ $route.params.category  }} </span>
              <h1 class="name-movie">{{ targetMovie.name }}</h1>
              <div class="footer-dt">
                <div class="time-mv">
                  <img
                    class="icon-sm"
                    src="../assets/icon/clock.svg"
                    alt="time"
                  />
                  <span class="txt-sm"> {{ convertMinsToHrsMins(targetMovie.time) }} </span>
                </div>
                <div class="like-mv">
                  <img
                    class="icon-sm"
                    src="../assets/icon/heart.svg"
                    alt="time"
                  />
                  <span class="txt-sm"> {{ numberWithCommas(targetMovie.likes) }} </span>
                </div>
                <div class="imdb-mv txt-sm">
                  <span class="imdb">IMDB</span>
                  <span class="evalution">{{ targetMovie.imdb }}</span>
                </div>
              </div>
            </div>
            <div class="info-link">
              <button class="btn btn-second">Trailer Movie</button>
              <button class="btn btn-main">Watch Movie</button>
            </div>
          </div>
        </div>

        <div class="body-dt">
          <h4 class="title-dt">About Movie</h4>

          <p class="para">
             {{ targetMovie.description }}
          </p>
        </div>

        <div class="ftr-dt">
          <h4 class="title-dt">About Movie</h4>

          <ul class="crew">
            <li class="crew-item" v-for=" crew in targetMovie.crews" :key="crew.name">
              <img :src="require(`@/assets/faces/${crew.img}`)" />
              <span class="name-crew"> {{ crew.name }} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex' ; 
import sharedMethods from '/shared/methods.js' ; 

export default {
  data() {
    return {
    };
  },
  computed : {
    ...mapState(["targetMovie"])
  } , 
  methods : {
    ...mapActions(["getMovieById"]) , 
    ...sharedMethods 
  } , 
  created() {
    // init to get movie 
    let { id , category } = this.$route.params ; 
    this.getMovieById({ id , category }) ; 
  } , 


};
</script>

<style lang="scss" scoped>
@import "../scss/abstract/variable.scss";

.icon-arrow img {
  width: 10px;
  opacity: 0.5;
  margin-right: 10px;
  transform: rotateY(180deg);
}

.head-page {
  padding: 3rem 0 3rem;
  .text-link {
    font-size: 14px;
    font-weight: 300;
    &:hover {
      color: $primaryColor;
    }
  }
}

.dt-movie {
    margin-bottom: 5rem ;
  display: flex;
  .poster {
      margin-right: 3rem ;
    img {
      width: 350px;
      height: 550px;
      object-fit: cover;
      border-radius: 10px;
      border: 2px solid $primaryColor;
    }
  }

  .info-movie{
      margin: 0 0 .5rem ;
      .name-movie{
          font-size: 2rem ;
          margin-top: 1rem ;
      }
  }


  .head-dt{
      align-items: flex-start;
  }


}

.body-dt{
    p{
        font-weight: 300 ;
        font-size: $para - 2 ;
        line-height: 1.9 ;
    }
}
  .title-dt{
      display: block ;
      margin: 3rem 0 10px ;
      color: $primaryColor ;
  }

  .crew{
      display: flex;
      .crew-item{
          display: flex ;
          align-items: center ;
          margin-right: 1rem ;
          img{
              border-radius: 50% ;
              width: 60px ;
              object-fit: cover;
              border: 2px solid white ;
          }

          .name-crew{
              font-size: $txt-sm;
              margin-left: 10px ;
              color: $txt-second ;
          }
      }
  }


  .btn-main{
      background: $primaryColor ;
      color : white ; 
  }

  .btn{
      padding: .9rem 2rem ;
      font-size: 14px ;
      margin-left: 10px ;
      cursor: pointer;
  }
</style>