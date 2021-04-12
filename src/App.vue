<template>
  <div id="app">
    <Loader />
    <PosterBg :poster="poster" />
    <Header />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <Pagination
      :perPage="moviesPerPage"
      :total="totalMovies"
      :currentPage="currentPage"
      @changePage="onChangePage"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from './components/MoviesList';
import PosterBg from './components/PosterBg';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBg,
    Pagination,
    Loader,
    Header
  },
  data: () => ({
    poster: ''
  }),
  computed: {
    ...mapGetters('movies', [
      'moviesList',
      'currentPage',
      'moviesPerPage',
      'totalMovies'
    ])
  },
  methods: {
    ...mapActions('movies', ['changeCurrentPage']),
    onChangePoster(poster) {
      this.poster = poster;
    },
    onChangePage(value) {
      this.$router.push({ query: { page: value } });
    },
    changePageQuery({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    }
  },
  watch: {
    '$route.query': {
      handler: 'changePageQuery',
      immediate: true,
      deep: true
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  padding-bottom: 30px;
}
</style>
