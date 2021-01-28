<template>
  <div>
    <b-nav vertical class="sidenav">
      <router-link class="py-3 rounded my-2 mx-3 mt-3" active to="/">Server1 <small>(Movies)</small></router-link>
      <router-link class="py-3 rounded my-2 mx-3 mt-3" to="/server2">Server2 <small>(Anime)</small></router-link>
      <router-link class="py-3 rounded my-2 mx-3 mt-3" to="/server3">Server3 <small>(HD)</small></router-link>
      <router-link class="py-3 rounded my-2 mx-3 mt-3" to="/server4">Server4 <small>(Korean)</small></router-link>
      <router-link class="py-3 rounded my-2 mx-3 mt-3" to="/server4">Server5 <small>(Korean)</small></router-link>
      <router-link class="py-3 rounded my-2 mx-3 mt-3" to="/server4">Server6 <small>(Korean)</small></router-link>
      <router-link class="py-3 rounded my-2 mx-3 mt-3" to="/server4">Server7 <small>(Korean)</small></router-link>
      <div class="side-nav-footer">
        <small> <b> Pye.py -- </b> <span>Terms</span></small>
        <p><span>Copyright © PYE.py. All Right Reserved</span></p>
      </div>
    </b-nav>
    <div class="server1 mt-5">
      <!------------------------------------------------ sidebar --------------------------------------->
      <h2 class="text-light">Trending Movies</h2>
      <div class="trending-movies">
        <carousel v-if="trendingMoviesList.length" :lazyLoad="true" :stagePadding=1 :autoplay="true" :items="4" :loop="true" :nav="false" :dots="false" :autoplayTimeout=4000>
          <!-- <img src="https://placeimg.com/200/200/any?1" class="p-2 carousel-img">
          <img src="https://placeimg.com/200/200/any?2" class="p-2 carousel-img">
          <img src="https://placeimg.com/200/200/any?3" class="p-2 carousel-img">
          <img src="https://placeimg.com/200/200/any?5" class="p-2 carousel-img">
          <img src="https://placeimg.com/200/200/any?6" class="p-2 carousel-img">
          <img src="https://placeimg.com/200/200/any?7" class="p-2 carousel-img">
          <img src="https://placeimg.com/200/200/any?8" class="p-2 carousel-img">
          <img src="https://placeimg.com/200/200/any?9" class="p-2 carousel-img"> -->
          <div v-for="trendingMovie in trendingMoviesList" :key="trendingMovie.id">
            <router-link :to="'/movie/' + trendingMovie.id" v-b-toggle.sidebar-backdrop>
              <div class="">
                <img :src="'http://image.tmdb.org/t/p/w500/' + trendingMovie.poster_path" alt="Movie Poster" class="carousel-img" width="220" height="280">
              </div>
              <p class="h2 icon-container">
                <b-badge class="download-icon p-3"><b-icon-download></b-icon-download></b-badge>
              </p>
              <!-- <div class="detail mt-2">
                <p>{{movie.title}}</p>
                <small>vote - {{ movie.vote_average }}</small>
              </div> -->
            </router-link>
          </div>
        </carousel>
      </div>

      <!--------------------------------------------------- sidebar ---------------------------------------->
      <h2 class="text-light">Discover Movies</h2>
      <div class="movies-list">
        <div class="movie text-center" v-for="discoverMovie in discoverMoviesList" :key="discoverMovie.id" @click="getMovie(discoverMovie)" :valList="discoverMovie">
          <router-link :to="'/movie/' + discoverMovie.id" class="movie-link" @click="getMovieDetails()" v-b-toggle.sidebar-backdrop>
            <div class="product-image  discover-movies">
              <img :src="'http://image.tmdb.org/t/p/w500/' + discoverMovie.poster_path" alt="Movie Poster" width="220" height="280">
              <p class="h3 icon-container">
                <b-badge class="download-icon p-3"><b-icon-download></b-icon-download></b-badge>
              </p>
            </div>
            <div class="detail mt-2">
              <p>{{ discoverMovie.title }}</p>
              <small>vote - {{ discoverMovie.vote_average }}</small>
            </div>
          </router-link>
        </div>
      </div>
      <!------------------------------------------------- sidebar ------------------------------------------>
      <div class="movies-list">
        <h1 class="text-light">Search Movies</h1>
        <div class="movie text-center" v-for="movie in movies" :key="movie.id">
          <router-link :to="'/movie/' + movie.id" class="movie-link" @click="getMovieDetails()" v-b-toggle.sidebar-backdrop>
            <div class="product-image  discover-movies">
              <img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Movie Poster" width="220" height="280">
              <p class="h3 icon-container">
                <b-badge class="download-icon p-3"><b-icon-download></b-icon-download></b-badge>
              </p>
            </div>
            <div class="detail mt-2">
              <p>{{ movie.title }}</p>
              <small>vote - {{ movie.vote_average }}</small>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {

  components: {
    carousel
  },

  props: [
    'movies',
    'trendingMoviesList',
    'discoverMoviesList'
  ],

  data () {
    return {
      movieDetail: [],
      valList: []
    }
  },

  methods: {
    getMovieDetails () {
      fetch(`http://www.omdbapi.com/?apikey=ee6386a2&s=${this.movie.Title}&plot=short`)
        .then(response => response.json())
        .then(data => {
          this.movieDetail = data
          console.log('hjhjhj', this.movieDetail)
        })
    },

    getMovie (val) {
      console.log({ val })
      this.valList = val
    }
  }
}
</script>

<style lang="scss" scoped>

.nav{
  width: 17%;
  top: 15%;
  max-height: 85%;
  overflow-y: scroll;
  position: fixed;
  flex-wrap: nowrap;
  border-right: 3px solid #808080;

  a{
    color:white;
    padding-left: 12px;
    font-weight: 800;
  }

  a.router-link-exact-active{
    color: #ffe401;
    background-color: #272a32
  }

  a:hover{
    background-color: #272a32;
    border-radius: 5px;
    text-decoration-line: none;
  }

  .side-nav-footer{
    padding-left: 17px;
    color: white;
    margin-top: 20px;

    small{
      span{
        color:#ffe401;
        background-color: #80808033;
        padding: 2px
      }
    }

    span{
      color: #808080;
      font-size: 10px
    }
  }
}

.server1{
  width: 83%;
  right: 0%;
  top: 15%;
  position: absolute;
  margin: 20px 0px 20px 50px;
  padding: 0 0 0 30px;

    h2{
      font-weight: 900;
    }

    .icon-container{
      position: absolute;
      bottom: 8%;
      right: 15%;

      .download-icon{
        color: #121620;
        background-color: #ffe401;
        border-radius: 50%;
      }
    }

    .trending-movies{
      height: 420px;

      .owl-stage .carousel-img{
        height: 380px;
        border-radius: 30px;
        transition-timing-function: ease-out;
        padding: 10px;
        opacity: 0.7;
        transition: 0.6;
      }

      .owl-stage .carousel-img:hover{
        opacity: 1
      }

    }

    .discover-movies:hover{
      transform: scale(1.05, 1.05);
      transition: 0.5s
    }

   .movies-list{
    display:flex;
    flex-wrap:wrap;
    margin:5px 8px;

    .movie{
      max-width:50%;
      flex:1 1 25%;
      padding:16px 8px;

      .product-image{
        position:relative;
        display:block;

        img{
          display:block;
          object-fit: cover;
          margin: auto;
          border-radius: 10px;
        }

        .type{
          position:absolute;
          padding:8px 16px;
          background-color:#fff;
          color:#223322;
          bottom:16px;
          left:0px;
          text-transform:capitalize;
        }
      }

      .detail{
        padding:16px 8px;
        color: white;
        font-weight: 800;
        flex:1 1;
        border-radius: 8px;

        p{
          margin-bottom: 0px
        }

        small{
          font-weight: 800;
        }
      }
    }
  }

}
</style>
