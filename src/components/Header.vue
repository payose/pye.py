<template>
  <div id="header">
    <b-navbar toggleable="sm" type="light">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>Gophie.camol</b-navbar-brand>
      <form action="">
        <b-form-input
          id="search"
          :value="movieTitle"
          type="text"
          placeholder="Quick Search..."
          required
        ></b-form-input>
      </form>
      <!-- <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text>Navbar text</b-nav-text>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </div>
</template>

<script>

export default {
  
  data () {
    return {
      movieTitle: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#header{
  background-color: #121620;
  padding: 20px;
  position: fixed;

  .navbar{
    padding: 0;
    margin: 0;

    .navbar-brand{
      width: 15%;
      color: #ffe401;
      font-weight: 700;
      margin-left: 20px;
    }
  }

  input{
    outline: none;
    background-color: transparent;
    border: 0px;
    border-bottom: 2px solid#808080;
    width: 500px;
    border-radius: 0px;
  }

  input:focus{
    border: 0px
  }
}
</style>
