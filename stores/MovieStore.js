import { defineStore } from 'pinia';
import { ref } from 'vue';

// import { watch, onBeforeUnmount } from "vue";
// import debounce from "lodash.debounce";

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],

    popularShows: [],
    topRatedShows: [],
    onTheAirShows: [],

    popularityDescMovies: [],
    popularityAscMovies: [],

    popularityDescShows: [],
    popularityAscShows: [],

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

      const onTheAirShowsUrl = `${this.baseUrl}tv/on_the_air?${this.apiKey}`;

      await fetch(onTheAirShowsUrl).then(response => response.json()).then(data => {
        this.onTheAirShows = data.results;
      })

      const popularMoviesUrl = `${this.baseUrl}movie/popular?${this.apiKey}`;

      await fetch(popularMoviesUrl).then(response => response.json()).then(data => {
        this.popularMovies = data.results;
      })

      const topRatedMoviesUrl = `${this.baseUrl}movie/top_rated?${this.apiKey}`;

      await fetch(topRatedMoviesUrl).then(response => response.json()).then(data => {
        this.topRatedMovies = data.results;
      })

      const upcomingMoviesUrl = `${this.baseUrl}movie/upcoming?${this.apiKey}`;

      await fetch(upcomingMoviesUrl).then(response => response.json()).then(data => {
        this.upcomingMovies = data.results;
      })

      const PopularityDescMoviesUrl = `${this.baseUrl}discover/movie?&sort_by=popularity.desc&${this.apiKey}`;

      await fetch(PopularityDescMoviesUrl).then(response => response.json()).then(data => {
        this.popularityDescMovies = data.results;
      })

      const PopularityAscMoviesUrl = `${this.baseUrl}discover/movie?&sort_by=popularity.asc&${this.apiKey}`;

      await fetch(PopularityAscMoviesUrl).then(response => response.json()).then(data => {
        this.popularityAscMovies = data.results;
      })

      const PopularityDescShowsUrl = `${this.baseUrl}discover/tv?&sort_by=popularity.desc&${this.apiKey}`;

      await fetch(PopularityDescShowsUrl).then(response => response.json()).then(data => {
        this.popularityDescShows = data.results;
      })

      const PopularityAscShowsUrl = `${this.baseUrl}discover/tv?&sort_by=popularity.asc&${this.apiKey}`;

      await fetch(PopularityAscShowsUrl).then(response => response.json()).then(data => {
        this.popularityAscShows = data.results;
      })

      // http://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&page=1&api_key=YOUR_API_KEY
      // http://api.themoviedb.org/3/discover/movie?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&sort_by=popularity.desc
      // https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.descapi_key=348088421ad3fb3a9d6e56bb6a9a8f80
    },

    isFavActive(movie) {
      function convertJsonToArray(json) {
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
    toggleFav(movie) {
      const isFavorite = ref(Boolean);
      isFavorite.value = this.favMovies.includes(movie);

      if (isFavorite.value) {
        this.favMovies = this.favMovies.filter(m => m.id !== movie.id);

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
    SearchMovies(search) {
      console.log(search);
      console.log(search.value);
      // console.log(search['_value']);

      if (search.value && search.value.length >= 3) {
        console.log(search.value);

        const searchUrl = `${this.baseUrl}search/movie?${this.apiKey}&query=${search.value}`;

        console.log(searchUrl);

        fetch(searchUrl).then(response => response.json()).then(data => {	
          console.log(data);	


          console.log(this.searchResults);
        });

        document.querySelector('form .list-1').classList.remove('hidden');	
      }

      // !search.value && document.querySelector('form .list-1').classList.add('hidden');
    },
    /*
    SearchShows(search) {
        if (search && search.length >= 3) {
          console.log(search);
    
          const searchUrl = `${this.baseUrl}search/tv?${this.apiKey}&query=${search}`;
    
          console.log(searchUrl);
    
          fetch(searchUrl).then(response => response.json()).then(data => {
            console.log(data);
    
            this.searchResults = data.results; // array name: results
    
            console.log(this.searchResults);
          });
    
          document.querySelector('form .list-1').classList.remove('hidden');
        }    
      }
      */
  }
})