<template>
  <div id="app">
    <div class="square" @click="fetchMovies">
      rkbc
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {},
  mounted() {
    console.log('worked');
    this.fetchMovies();
  },
  methods: {
    ...mapActions('movies', ['fetchMovies'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.square {
  width: 400px;
  height: 400px;
  background: black;
}
</style>
