<template>
  <nav class="navbar">
    <div class="container nav-container">
      <!-- Logo -->
      <a href="/" class="logo">
        <span class="txt-bold logo-top">World</span>
        <span class="txt-reg logo-bottom">Movies</span>
      </a>

      <ul class="list-menu">
        <li class="list-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="list-item">
          <router-link to="/movies">Movies</router-link>
        </li>
        <li class="list-item">
          <router-link to="/contact">Contact us</router-link>
        </li>
        <li class="list-item">
          <router-link to="/about">About</router-link>
        </li>
      </ul>

      <ul class="list-user">
        <li class="user-item">
          <span class="icon-sm search-button">
            <img src="../../assets/icon/search.svg" alt="search" />
          </span>
        </li>
        <li class="user-item">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="user-item">
          <router-link to="/signup" class="btn btn-primary">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style lang="scss">

@import '@/scss/abstract/variable.scss' ; 

.list-user,
.list-menu,
.nav-container {
  display: flex;
}

.navbar {
  padding: .8em 0;
  border-bottom: 1px solid $borderColor ;
  width: 100%;
  font-size: 15px ;
  .nav-container {
    justify-content: space-between;
    align-items: center;
  }
}






.list-menu{
  font-size: $para ;
  & > * {
    margin: 0 1em ;
    font-weight: 300 ;
    & > * {
      color: $txt-second ;
    }
  }
}


.router-link-exact-active{
  color: $secondColor ;
  font-weight: 400 ;
}


.list-user{
  font-size: 15px ;
  margin-left : -6em;
  align-items: center;
  & > * {
    margin-left : 2em ; 
    font-weight: 300 ;
  }

  .search-button{
    display: inline-block ;
    width: 25px;
    padding-top: 5px ;
    opacity: .5;
    transition: opacity .2s ease ;
    cursor: pointer;
    &:hover{
      opacity: 1 ;
    }
  }
}


</style>