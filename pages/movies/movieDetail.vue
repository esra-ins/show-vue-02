<template>
    <div>
        <!--  <div v-if="movieStore.movieDetailClicked = true"> -->
        <!--    <p>from detail page</p> -->
        <!-- </div>
        <div v-if="Object.keys(movieStore.movieDetail).length > 0"> -->
        <div>
            <img :src="movieStore.imgBaseUrl + movieStore.movieDetail.poster_path" />
            <div>{{ movieStore.movieDetail.title }} </div>
            <!--  <button @click="movieStore.toggleFav(show)" :class="{ active: movieStore.isFavActive(show) }"> fav </button> -->
            <button @click="movieStore.toggleFav(movieStore.movieDetail)"
                :class="{ active: movieStore.isFavActive(movieStore.movieDetail) }"> fav </button>
            <br>
            <!--   <div v-for="(d, index) in movieStore.movieDetail " :key="index"> -->
            <div>release date: {{ movieStore.movieDetail.release_date }} </div>
            <div>user score: {{ movieStore.movieDetail.vote_average }}</div>
            <!--   </div> -->
            <br>
            <div>Tagline: {{ movieStore.movieDetail.tagline }}</div>
            <br>
            <div> Overview: <br> {{ movieStore.movieDetail.overview }}</div>
            <br>
            <div>Status: {{ movieStore.movieDetail.status }}</div>
            <div>Budget: {{ movieStore.movieDetail.budget }}</div>
            <div>Revenue: {{ movieStore.movieDetail.revenue }}</div>
        </div>
    </div>
    <!--  </div> -->
</template>

<script setup>
import { useMovieStore } from '~/stores/MovieStore';

const movieStore = useMovieStore();
movieStore.getAll();
// console.log('...', movieStore.getAll())

/*
const addToFav = (show) => {
    console.log(show.name);
}
return { addToFav }
*/
</script> 
  
<style>
/* start2.................................................................................................. */
button.active {
    background-color: rgb(250, 7, 169);
    border: 1px solid white;
    color: white;
}
/* end2...................................................................................................... */
</style>