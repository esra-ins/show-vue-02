<template>
    <div class="shows-list">
        <div class="top-rated-list mb-8 font-bold">
            <input class="cursor-pointer" type="button" value="ON THE AIR TV-SHOWS" :bind="movieStore.onTheAirShows">
            <div class="w-full overflow-hidden">
                <div class="inline-flex overflow-x-scroll w-full overflow-y-hidden">
                    <div class="top-rated  m-4 w-32 h-60 min-w-fit" v-for="show in movieStore.onTheAirShows" :key="show.id">
                        <img :src="movieStore.imgBaseUrl + show.poster_path" class="max-h-40 rounded-xl" />
                        <div class="w-9 h-9 bg-black text-white text-center rounded-2xl -mt-4 pt-2 border-white relative">
                            {{ show.vote_average }}</div>
                        <div class="w-min mt-1 min-w-fit">{{ show.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useMovieStore } from '~/stores/MovieStore';

const movieStore = useMovieStore();
movieStore.getAll();
</script>
  
<style></style>