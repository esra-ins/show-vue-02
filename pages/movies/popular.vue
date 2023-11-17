<template>
    <div class="top-rated-list mb-8 font-bold">
        <div class="w-full overflow-hidden">
            <h1 class="ml-4"> POPULAR MOVIES </h1>
            <div class="inline-flex overflow-x-scroll w-full overflow-y-hidden">
                <!-- start............. -->
                <div class="inline-flex gap-5" v-if="movieStore.movieList.length > 0">
                    <!-- <div v-if="sortedBy !== 'popularityAsc' & sortedBy !== 'popularityDesc'"> -->
                    <div v-for="movie in movieStore.movieList" :key="movie.id">
                        <div>
                            <img :src="movieStore.imgBaseUrl + movie.poster_path" class="h-40 max-h-40 rounded-xl" />
                            <div>
                                {{ movie.popularity }}</div>
                            <div class="w-min mt-1 min-w-fit">{{ movie.title }}</div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div v-for="movie in movieStore.popularMovies" :key="movie.id">
                        <div>
                            <img :src="movieStore.imgBaseUrl + movie.poster_path" class="h-40 max-h-40 rounded-xl" />
                            <div>
                                {{ movie.popularity }}</div>
                            <div class="w-min mt-1 min-w-fit">{{ movie.title }}</div>
                        </div>
                    </div>
                </div>
                <!-- end.. -->
            </div>
        </div>
        <!-- start.. -->
        <div>
            <div>
                <h1>SORTED BY</h1>
                <select v-model="sortedBy">
                    <option selected> popularityDesc </option>
                    <option> popularityAsc </option>
                </select>
            </div> <br>
            <div>
                <h1>FILTERS</h1>
                <h1>......genres....</h1>
                <div v-for="genre in movieStore.movieGenreList" :key="genre.id">
                    <div> <button @click="movieStore.GetMovieList(genre, sortedBy)"> {{ genre.name }} </button> </div>
                </div>
            </div>
        </div>
        <!-- end..... -->
    </div>
</template>


<script setup>
import { useMovieStore } from '~/stores/MovieStore';

//start..
const sortedBy = ref("");
sortedBy.value = 'popularityDesc';
//end...

const movieStore = useMovieStore();
movieStore.getAll();

</script> 


<style>
.overflow-y-hidden > div:first-child {
    display: inline-flex;
    gap: 20px;
}
</style>