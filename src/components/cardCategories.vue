<template>
  <a class="card-categories"  :href="categorie.link">
    <img
      class="img-categ"
      :src="require(`@/assets/img/${categorie.image}`)"
      :alt="categorie.title"
    />
    <div class="text-categ">
      <h1 class="title">{{ categorie.title }}</h1>
    </div>
  </a>
</template>

<script>
export default {
  name: "card-categ",
  props: ["categorie"],
};
</script>

<style lang="scss" scoped >
@import "@/scss/abstract/variable.scss";

.card-categories {
    font-size: 8px ;
  width: 36em;
  height: 60em ;
  display: inline-block;
  position: relative;
  border-radius: 5px;
  .img-categ {
    width: 100%;
    border-radius: inherit;
    height: 100%;
    filter: grayscale(1);
    transition: filter 0.5s ease-out;
    object-fit: cover ;
  }

  .text-categ {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    font-size: inherit ;
    z-index: 5 ;
    &::before{
        position: absolute;
        content: '';
        font-size: 1em ;
        top: 0 ;
        border-radius: 0 0 5px 5px ;
        left: 0 ;
        width: 100% ;
        height: 100% ;
        background-image: linear-gradient(to top , rgb(43, 43, 43) , transparent ) ;
        z-index:  5 ;
    }


    .title{
        z-index: 10;
        padding: 0 0 2rem 2rem ;
        font-size: 3.2em ;
        text-transform: capitalize;
        font-weight: 400 ;
        letter-spacing: .5px ;
        transition: transform .5s ease , color .2s ease-out;
    }
  }

  &:hover {
    .img-categ {
      filter: grayscale(0.5);
    }

    .title{
        transform: translateY(-15px);
        color: $primaryColor ;
    }
  }
}
</style>