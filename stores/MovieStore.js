import { defineStore } from 'pinia'
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
    //start.........................................................
    /* comedyMovies: [], */
    movieGenreList: [],
    movieList: [],
    //movieList2: [],
    showGenreList: [],
    showList: [],
    //end...........................................................
    //2start........................................................
    movieDetail: {},
    //2end..........................................................
    searchResults: [],
    apiKey: useRuntimeConfig().api_key,
    baseUrl: useRuntimeConfig().base_Url,
    imgBaseUrl: useRuntimeConfig().img_Base_Url,
    favShows: [],
    //favMovies: JSON.parse(localStorage.getItem('favorite-movies')) || [], // need to look LS
    favMovies: [],
    isFav: false,
    // movieDetailClicked: false,
  }),
  actions: {
    async getAll() {
      const popularShowsUrl = `${this.baseUrl}tv/popular?${this.apiKey}`;

      await fetch(popularShowsUrl).then(response => response.json()).then(data => {
        this.popularShows = data.results;
      })

      const topRatedShowsUrl = `${this.baseUrl}tv/top_rated?${this.apiKey}`;
      //console.log(topRatedShowsUrl);

      await fetch(topRatedShowsUrl).then(response => response.json()).then(data => {
        this.topRatedShows = data.results;
        //console.log(data.results)
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

      //start.....................................................................................................
      const MovieGenreListUrl = `${this.baseUrl}genre/movie/list?language=en&${this.apiKey}`;

      await fetch(MovieGenreListUrl).then(response => response.json()).then(data => {
        this.movieGenreList = data.genres;  //note: array's name is genres. not results!!!!
      })

      const ShowGenreListUrl = `${this.baseUrl}genre/tv/list?language=en&${this.apiKey}`;

      await fetch(ShowGenreListUrl).then(response => response.json()).then(data => {
        this.showGenreList = data.genres;   //note: array's name is genres. not results!!!!
      })
      //end....................................................................................................
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
      console.log("fav..", this.favMovies)
      // this.$auth.$storage.setCookie('favorite-movies', JSON.stringify(favoritesObject))
      // localStorage.setItem('favorite-movies', JSON.stringify(favoritesObject));
    },
    //start..................................................................................................
    GetMovieList(genre, sortedBy) {
      console.log("sort", sortedBy)
      //const movieGenreUrl = `${this.baseUrl}discover/movie?&with_genres=${genre.id}&sort_by=${sortedBy}&${this.apiKey}`;
      // console.log(movieGenreUrl);

      const movieGenreUrl = `${this.baseUrl}discover/movie?&with_genres=${genre.id}&${this.apiKey}`;

      if (sortedBy = 'popularityAsc') {
        //console.log("...inDesc");
        fetch(movieGenreUrl).then(response => response.json()).then(data => {
          this.movieList = data.results;

          const arrAsc = this.movieList.sort(
            (objA, objB) => Number(objA.popularity - objB.popularity),
          );

          this.movieList = arrAsc;
        })
      }

      if (sortedBy = 'popularityDesc') {
        // console.log("...inAsc");
        fetch(movieGenreUrl).then(response => response.json()).then(data => {
          this.movieList = data.results;

          const arrDesc = this.movieList.sort(
            (objA, objB) => Number(objB.popularity - objA.popularity),
          );

          this.movieList = arrDesc;
        })
      }
    },
    GetShowList(genre, sortedBy) {
      console.log("sortedBy", sortedBy);

      const showGenreUrl = `${this.baseUrl}discover/tv?&with_genres=${genre.id}&${this.apiKey}`;

      if (sortedBy = 'popularityDesc') {
        //console.log("...inDesc");
        fetch(showGenreUrl).then(response => response.json()).then(data => {
          this.showList = data.results;

          const arrDesc = this.showList.sort(
            (objA, objB) => Number(objB.popularity - objA.popularity),
          );

          this.showList = arrDesc;
        })
      }

      if (sortedBy = 'popularityAsc') {
        // console.log("...inAsc");
        fetch(showGenreUrl).then(response => response.json()).then(data => {
          this.showList = data.results;

          const arrAsc = this.showList.sort(
            (objA, objB) => Number(objA.popularity - objB.popularity),
          );

          this.showList = arrAsc;
        })
      }
    },
    //end..............................................................................................
    SearchMovies(search) {
      if (search && search.length >= 3) {
        const searchUrl = `${this.baseUrl}search/movie?${this.apiKey}&query=${search}`;

        console.log(searchUrl);

        fetch(searchUrl).then(response => response.json()).then(data => {
          console.log(data);

          this.searchResults = data.results; // array name: results

          console.log(this.searchResults);
        });

        document.querySelector('form .list-1').classList.remove('hidden');
      }
      // !search.value && document.querySelector('form .list-1').classList.add('hidden');
    },
    //2start.............................................................................................
    getMovieDetail(id) {
      const movieDetailUrl = `${this.baseUrl}movie/${id}?&${this.apiKey}`;
      //console.log(movieDetailUrl);

      fetch(movieDetailUrl).then(response => response.json()).then(data => {
        this.movieDetail = data;

        console.log("length   ", Object.keys(this.movieDetail).length);

        // return data;
      });
      // this.$router.push('movies/movieDetail')
      // useRoute('movies/movieDetail')
      // sendRedirect("/movies/movieDetail");

      //this.movieDetailClicked = true;

      /* console.log("last1   ", this.movieDetail);
      console.log("length1   ", this.movieDetail.length); */
      //return this.movieDetail;
      /*  fetch(movieDetailUrl).then(response => response.json()).then(data => {
         const arr = [
           id = data.id,
           title = data.title
         ]
 
         this.movieDetail = arr;
         console.log(arr);
         console.log(this.movieDetail.length)
       });
      */

      /* const ids = movie.id;
      const titles = movie.title;

      this.movieDetail = [
        { id: ids },
        { title: titles },
      ]
      console.log("title", this.movieDetail.title)
      */
      // this.movieDetail = newArr;
      // console.log(newArr.value)
      //return movie;
      /* console.log(this.movieDetail)
      console.log(this.movieDetail.value)
      console.log(this.movieDetail.length)
      */
    },
    //2end....................................................................................
  }
})