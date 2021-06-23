<template>
  <form class="form-search">
    <div class="input-content">
      <input
        type="search"
        class="inp inp-search"
        v-model="textSearch"
        placeholder="find your favorite movie"
        @input="changing()"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "search-movies",
  data : function () {
    return {
      textSearch: "",
    };
  },
  methods : {
    changing : function () {
        console.log(this.textSearch) ; 
    }
  }
};
</script>

<style  lang="scss" scoped>
.form-search {
  width: 100%;
}
.inp-search {
  width: 100%;
  padding-left: 4.5em;
}

.inp-search::-webkit-search-cancel-button {
  position: relative;
  right: 0;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 10px;
  background: #48bba8;
  background-image: url(../assets/icon/close.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 10px 10px;
}

.input-content {
  position: relative;
  &::before {
    position: absolute;
    content: "";
    left: 30px;
    top: 16px;
    opacity: 0.2;
    width: 30px;
    height: 30px;
    background: url(../assets/icon/search.svg) no-repeat center center;
    background-size: cover;
  }
}
</style>