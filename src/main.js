import { createApp  } from 'vue'
import App from './App.vue'
import router from './router' ;
// include scss
import '@/scss/index.scss' ; 
import includeComponent from '../helper/globalComponent' ; 
import filters from '../helper/filters' ; 
import store from './store' ; 

const app = createApp(App) ;


// include our component to global 
includeComponent( app ) ; 

// include filters 
app.config.globalProperties.$filters = filters ; 

app.use(store) ; 

app.use(router).mount('#app')
