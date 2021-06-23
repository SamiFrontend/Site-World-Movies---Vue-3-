import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue' ; 
import login from '../views/login.vue' ; 
import signup from '../views/signup.vue' ; 
import details from '../views/details.vue' ; 
import sectionMovie from '../views/sectionMovie.vue' ; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies' ,
    name : 'movies' , 
    component : Movies  
  },
  {
    path: '/movies/:category/:id' ,
    name : 'details' , 
    component : details  
  },
  {
    path: '/login' ,
    name : 'login' , 
    component : login  
  },
  {
    path: '/signup' ,
    name : 'signup' , 
    component : signup  
  },
  {
    path: '/movies/:category' ,
    name : 'sectionMovie' , 
    component : sectionMovie 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
