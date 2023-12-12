<template>
    <div class="top-rated-list mb-8 font-bold">
        <div class="w-full overflow-hidden">
            <h1 class="ml-4"> TOP RATED MOVIES </h1>
            <div class="inline-flex overflow-x-scroll w-full overflow-y-hidden">
                <div class="popularmovie-list m-4 w-32 h-60 min-w-fit" v-for="movie in movieStore.topRatedMovies"
<<<<<<< HEAD
                    :key="movie.id" @click="movieStore.getMovieDetail(movie.id);">
                    <NuxtLink to="/movies/movieDetail">
                        <div>
                            <img :src="movieStore.imgBaseUrl + movie.poster_path" class="max-h-40 rounded-xl" />
                            <!--  @click="'/movies/movieDetail'" /> -->
                            <div
                                class="w-9 h-9 bg-black text-white text-center rounded-2xl -mt-4 pt-2 border-white relative">
                                {{ movie.vote_average }}</div>
                            <div class="w-min mt-1 min-w-fit">{{ movie.title }}</div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <br>
        <!-- start2......................................................................... -->
        <!--   <div v-if="movieStore.movieDetailClicked = true"> -->
        <div v-if="Object.keys(movieStore.movieDetail).length > 0">
            <NuxtLink to="/movies/movieDetail"> movie Detail page</NuxtLink> <br>
        </div>
    </div>
</template>

=======
                    :key="movie.id">
                    <div>
                        <img :src="movieStore.imgBaseUrl + movie.poster_path" class="max-h-40 rounded-xl" />
                        <div class="w-9 h-9 bg-black text-white text-center rounded-2xl -mt-4 pt-2 border-white relative">
                            {{ movie.vote_average }}</div>
                        <div class="w-min mt-1 min-w-fit">{{ movie.title }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



>>>>>>> cdcae9d279ceb1ade6b3afd3742eb12eba74e5de
<script setup>
import { useMovieStore } from '~/stores/MovieStore';

const movieStore = useMovieStore();
movieStore.getAll();
<<<<<<< HEAD
console.log('...', movieStore.movieDetailClicked);

/* const addToFav = (show) => {
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
=======
// console.log('...', movieStore.getAll())
</script> 
  
<style></style>
>>>>>>> cdcae9d279ceb1ade6b3afd3742eb12eba74e5de
