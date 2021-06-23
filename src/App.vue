<template>
   <header-component /> 

   <main>
   <router-view />
   </main>

   <footer-component /> 
</template>


<script>

import header from '../src/components/Shared/header' ; 
import footer from '../src/components/Shared/footer' ; 

export default {
  components : {
    'footer-component': footer , 
    'header-component' : header 
  } , 
}
</script>


<style lang="scss">


    #app{
      display : flex ; 
      height : 100% ; 
      flex-direction : column ; 
    }
</style>
