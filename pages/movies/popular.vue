<template>
    <div class="top-rated-list mb-8 font-bold">
        <div class="w-full overflow-hidden">
            <h1 class="ml-4"> POPULAR MOVIES </h1>
            <div class="inline-flex overflow-x-scroll w-full overflow-y-hidden">
                <div class="popularmovie-list m-4 w-32 h-60 min-w-fit" v-for="movie in movieStore.popularMovies"
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

        <div>
            <h1>SORTED BY</h1>
            <br>
            <input class="cursor-pointer" type="button" value="popularity desc" @click="filter = 'popularityDesc'"> <br>
            <input class="cursor-pointer" type="button" value="popularity asc" @click="filter = 'popularityAsc'">
        </div> <br>

        <div v-if="filter === 'popularityDesc'">
            <div v-for="movie in movieStore.popularityDescMovies" :key="movie.id">
                {{ movie.popularity }}
                {{ movie.title }}
            </div>
        </div>

        <div v-if="filter === 'popularityAsc'">
            <div v-for="movie in movieStore.popularityAscMovies" :key="movie.id">
                {{ movie.popularity }}
                {{ movie.title }}
            </div>
        </div>

    </div>
</template>


<script setup>
import { useMovieStore } from '~/stores/MovieStore';

const filter = ref("");

const movieStore = useMovieStore();
movieStore.getAll();
// console.log('...', movieStore.getAll())
</script> 
  

<style></style>