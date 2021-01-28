<template>
  <b-sidebar
    id="sidebar-backdrop"
    title="Sidebar with backdrop"
    backdrop
    shadow
  >
    <div class="px-3 py-2" v-for="list in valList" :key="list.id">
      <p>
        {{ valList.title }}
        {{ valList.overview}}
      </p>
      <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
    </div>
  </b-sidebar>
</template>

<script>
export default {

  data () {
    return {
      movie: {}
    }
  },
  props: [
    'valList'
  ],
  created () {
    this.getMovieDetails()
  },
  methods: {
    getMovieDetails () {
      console.log('yyyy', this.$route.params.id)
      fetch(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=8877d1eb614b8be7d7f8df5f78c5609d&language=en-US`)
        .then(response => response.json())
        .then(data => {
          this.movie = data
          console.log({ data })
          console.log('uhyihiughuig', this.movie)
          console.log('sdsdtggg', this.valList)
        })
    }
  }
}
</script>
