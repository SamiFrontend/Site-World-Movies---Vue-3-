import { createStore } from 'vuex';
import MOVIES from './movies.json' ;

export default createStore({
    state : {
            title : "state is working" ,
            movies : [] ,
            mostWatched : [] , 
            lastMovies : [] ,
            targetMovie : null 
    } , 
    mutations : {
        setMovies( state , payload ) {
            console.log(payload)
            state.movies = payload ; 
        } , 
        setTargetMovie( state , payload ) {
            state.targetMovie = payload ; 
        }
    } , 
    actions : {
            fetchMovies({ commit }) {
            // send movies 
            commit("setMovies" , MOVIES ) ;                  
        } , 
        getMovieById({ commit } , { id  , category } ){
            console.log(id)
            // find movie id 
            let movieBycategory = MOVIES[category] ; 
            for( let movie in movieBycategory ) {
                if( movieBycategory[movie].id === +id ){
                    commit("setTargetMovie" , movieBycategory[movie] ) ; 
                    return ; 
                }
            }

            commit("setTargetMovie" , 'cannot find movie') ; 
        } , 
         fetchByCategory( data  , category ) {
             data.commit("setMovies" ,  MOVIES[category] )  ; 
         }
    } , 
    getters : {
        getMovies(state){
            return state.movies
        }, 
        mostWatched(state) {
            state.mostWatched = [] ; 
            // let mostWatchMovies = state.movies ;
            for( let category in state.movies ) {
                // sort watch to access first three element 
                let sortWatch = state.movies[category].sort(( a , b ) => {
                    return b.watch - a.watch
                })


               state.mostWatched.push(...sortWatch.slice(0 , 3))
            }
           
            return state.mostWatched
        } , 
        lastMovies(state){
           
            // get three movies in any category 
            for( let category in state.movies ) {
                // sort watch to access first three element 
                let categoryOfmovie = state.movies[category] ; 
                let count = 0 ; 
                
                while( count < 3 ) {
                    state.lastMovies.push( categoryOfmovie[count] ) ;
                    count++ ; 
                }

            }


            return state.lastMovies ; 
           
        } , 
    }
});


