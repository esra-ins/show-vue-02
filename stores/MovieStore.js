import { defineStore } from 'pinia'
import { ref } from 'vue';

import { watch, onBeforeUnmount } from "vue";
import debounce from "lodash.debounce";


export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    popularMovies: [],
    popularShows: [],
    // search:"",
    topRatedShows: [],
    searchResults: [],
    apiKey: useRuntimeConfig().api_key,
    baseUrl: useRuntimeConfig().base_Url,
    imgBaseUrl: useRuntimeConfig().img_Base_Url,
    favShows: [],
    //favMovies: JSON.parse(localStorage.getItem('favorite-movies')) || [], // need to look LS
    favMovies: [],
    isFav: false,
  }),
  actions: {
    async getAll() {
      const popularShowsUrl = `${this.baseUrl}tv/popular?${this.apiKey}`;

      await fetch(popularShowsUrl).then(response => response.json()).then(data => {
        this.popularShows = data.results;
      })

      const topRatedShowsUrl = `${this.baseUrl}tv/top_rated?${this.apiKey}`;

      await fetch(topRatedShowsUrl).then(response => response.json()).then(data => {
        this.topRatedShows = data.results;
      })

      const popularMoviesUrl = `${this.baseUrl}movie/popular?${this.apiKey}`;

      await fetch(popularMoviesUrl).then(response => response.json()).then(data => {
        this.popularMovies = data.results;
      })
    },

    isFavActive (movie) {
      function convertJsonToArray (json) {
          var result = [];
          var keys = Object.keys(json);

          keys.forEach((key) => {
              result.push(json[key]);
          });

          return result;
      }

      const favMoviesObject = convertJsonToArray(JSON.parse(JSON.stringify(this.favMovies)))

      return Object.values(favMoviesObject).some((item) => {
          return item.id === movie.id;
      });
    },
    toggleFav (movie) {
      const isFavorite = ref(Boolean);
      isFavorite.value = this.favMovies.includes(movie);

      if (isFavorite.value) {
          this.favMovies= this.favMovies.filter(m=>m.id!==movie.id);

          isFavorite.value = false;
      } else {
          this.favMovies.push(movie);

          isFavorite.value = true;
      }

      this.isFav = isFavorite.value;

      const favoritesObject = JSON.parse(JSON.stringify(this.favMovies));

      // this.$auth.$storage.setCookie('favorite-movies', JSON.stringify(favoritesObject))
      // localStorage.setItem('favorite-movies', JSON.stringify(favoritesObject));
    },
    SearchShows(search) {
      if (search && search.length >= 3) {
        const searchUrl = `${this.baseUrl}search/tv?${this.apiKey}&query=${search}`;

        fetch(searchUrl).then(response => response.json()).then(data => {
            this.searchResults = data.results;

            // console.log("searches...",this.searchResults)
            // search="";
        });
      }
    },
    SearchMovies(search) {
      if (search.value && search.value.length >= 3) {
        console.log(search.value);

        const searchUrl = `${this.baseUrl}search/movie?${this.apiKey}&query=${search}`;

        console.log(searchUrl);

        fetch(searchUrl).then(response => response.json()).then(data => {
          console.log(data);

          this.searchResults = data.results; // array name: results

          //search.value = "";
          //console.log(movies.value);
        });

        document.querySelector('form .list-1').classList.remove('hidden');
      }

      // !search.value && document.querySelector('form .list-1').classList.add('hidden');
    }
  }
})