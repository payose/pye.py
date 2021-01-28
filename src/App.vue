<template>
  <div id="app">
    <div id="nav">
      <div id="header" class="fixed-top">
        <b-navbar toggleable="sm" type="light">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

          <b-navbar-brand class="ml-3"><img src="./assets/croped.png" alt="pye.py logo" width="200"></b-navbar-brand>
          <form @submit.prevent="searchMovies()">
            <b-form-input
              id="search"
              v-model="movieTitleSearch"
              type="text"
              placeholder="Quick Search..."
              required
            ></b-form-input>
            <button type="submit"><b-icon icon='search' class="icon"></b-icon></button>
          </form>
          <!-- <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-text>Navbar text</b-nav-text>
            </b-navbar-nav>
          </b-collapse> -->
        </b-navbar>
      </div>
    </div>
    <div id="main-body">
      <SideBar :movies='movies' :trendingMoviesList='trendingMoviesList' :discoverMoviesList='discoverMoviesList' />
    </div>

  </div>
</template>

<script>
// import Header from './components/Header'
import SideBar from './components/SideBar'
export default {
  components: {
    SideBar
  },

  props: [
    'search'
  ],

  data () {
    return {
      movieTitleSearch: '',
      movies: [],
      trendingMoviesList: [],
      discoverMoviesList: []
    }
  },
  methods: {
    discoverMovies () {
      // fetch(`https://www.omdbapi.com/?s=${this.movieTitleSearch}&apikey=ee6386a2&plot=short`)
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=8877d1eb614b8be7d7f8df5f78c5609d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7.0')
        .then(response => response.json())
        .then(data => {
          this.discoverMoviesList = data.results
          console.log('jhkjhkjhj', this.discoverMoviesList)
        })
    },

    trendingMovies () {
      fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=8877d1eb614b8be7d7f8df5f78c5609d')
        .then(response => response.json())
        .then(data => {
          this.trendingMoviesList = data.results
          console.log(this.trendingMoviesList)
        })
    },

    searchMovies () {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=8877d1eb614b8be7d7f8df5f78c5609d&language=en-US&query=${this.movieTitleSearch}&page=1&include_adult=true`)
        .then(response => response.json())
        .then(data => {
          this.movies = data.results
          console.log(this.movies)
        })
    }
  },

  mounted () {
    this.discoverMovies()
    this.trendingMovies()
  }
}
// https://api.themoviedb.org/3/movie/550?api_key=8877d1eb614b8be7d7f8df5f78c5609d
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#header{
  padding: 5px 0px;
  position: fixed;
  background-color: #121620;

  .navbar{
    padding: 0;
    margin: 0
  }

  .navbar-brand{
    width: 15%;
    color: #ffe401;
    font-weight: 700;
  }

  form{
    input, input:focus{
      outline: none;
      background-color: transparent;
      border: 0px;
      border-bottom: 2px solid#808080;
      width: 500px;
      border-radius: 0px;
      box-shadow: none;

    }

    button{
      background-color: transparent;
      outline: none;
      border: 0px;
      color:#808080;
      position: absolute;
      top: 37px;
      left: 690px
    }
  }

}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
