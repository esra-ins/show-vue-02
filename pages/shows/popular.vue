<template>
    <div class="shows-list">
        <div class="top-rated-list mb-8 font-bold">
            <input class="cursor-pointer" type="button" value="POPULAR TV-SHOWS" :bind="movieStore.popularShows">
            <div class="w-full overflow-hidden">
                <div class="inline-flex overflow-x-scroll w-full overflow-y-hidden">
<<<<<<< HEAD
                    <!-- start.................................................. -->
                    <div v-if="movieStore.showList.length > 0">
                        <div v-for="show in movieStore.showList" :key="show.id">
                            <div>
                                <img :src="movieStore.imgBaseUrl + show.poster_path" class="max-h-40 rounded-xl" />
                                <div>
                                    {{ show.popularity }}</div>
                                <div class="w-min mt-1 min-w-fit">{{ show.name }}</div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="top-rated  m-4 w-32 h-60 min-w-fit" v-for="show in movieStore.popularShows"
                            :key="show.id">
                            <img :src="movieStore.imgBaseUrl + show.poster_path" class="max-h-40 rounded-xl" />
                            <div>
                                {{ show.popularity }}</div>
                            <div class="w-min mt-1 min-w-fit">{{ show.name }}</div>
                        </div>
                    </div>
                    <!-- end.......................................... -->
                </div>
            </div>
        </div>
        <!-- start................................ -->
        <div>

            <div>
                <h1>SORTED BY</h1>
                <select v-model="sortedBy">

                    <option selected> popularityDesc </option>
                    <option> popularityAsc </option>
                    <!--  <option selected> voteAverageAsc </option>
                    <option>voteAverageDesc </option> -->
                </select>
            </div> <br>

            <div>
                <h1>FILTERS</h1>
                <h1>........genres.........</h1>
                <div v-for="    genre     in     movieStore.showGenreList    " :key="genre.id">
                    <div> <button @click="movieStore.GetShowList(genre, sortedBy)"> {{ genre.name }} </button> </div>
                </div>

            </div>

        </div>
        <!-- end............................... -->
=======
                    <div class="top-rated  m-4 w-32 h-60 min-w-fit" v-for="show in movieStore.popularShows" :key="show.id">
                        <img :src="movieStore.imgBaseUrl + show.poster_path" class="max-h-40 rounded-xl" />
                        <div class="w-9 h-9 bg-black text-white text-center rounded-2xl -mt-4 pt-2 border-white relative">
                            {{ show.vote_average }}</div>
                        <div class="w-min mt-1 min-w-fit">{{ show.name }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div>

            <h1>SORTED BY</h1>
            <br>
            <input type="button" value="popularity desc" @click="filter = 'popularityDesc'"> <br>
            <input type="button" value="popularity asc" @click="filter = 'popularityAsc'">
        </div> <br>



        <div v-if="filter === 'popularityDesc'">


            <div v-for="show in movieStore.popularityDescShows" :key="show.id">
                {{ show.popularity }}
                {{ show.name }}
            </div>

        </div>


        <div v-if="filter === 'popularityAsc'">


            <div v-for="show in movieStore.popularityAscShows" :key="show.id">
                {{ show.popularity }}
                {{ show.name }}
            </div>

        </div>

>>>>>>> cdcae9d279ceb1ade6b3afd3742eb12eba74e5de
    </div>
</template>
  
<script setup>
import { useMovieStore } from '~/stores/MovieStore';
<<<<<<< HEAD

//start.......................................
const sortedBy = ref("");
sortedBy.value = 'popularityDesc';
//sortedBy.value = 'voteAverageAsc';
//console.log("ss....", sortedBy.value);
//end..........................................
=======
const filter = ref("");
>>>>>>> cdcae9d279ceb1ade6b3afd3742eb12eba74e5de

const movieStore = useMovieStore();
movieStore.getAll();
</script>
  
<style></style>