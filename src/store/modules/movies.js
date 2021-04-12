import axios from '../../plugins/axios';
import IDs from '../mock/inDB_top250';
import mutations from '../mutations';

const { MOVIES, CURRENT_PAGE, REMOVE_MOVIE, TOGGLE_TITLE } = mutations;

function serializeData(res) {
  console.log(res);
  return res.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

const moviesStore = {
  namespaced: true,
  state: {
    topIDs: IDs,
    moviesPerPage: 12,
    currenPage: 1,
    movies: {},
    titleState: false
  },
  getters: {
    moviesList: ({ movies }) => movies,
    slisedIDs: ({ topIDs }) => (from, to) => topIDs.slice(from, to),
    currentPage: ({ currenPage }) => currenPage,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    totalMovies: ({ topIDs }) => Object.keys(topIDs).length,
    titleState: ({ titleState }) => titleState
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
    [CURRENT_PAGE](state, value) {
      state.currenPage = value;
    },
    [REMOVE_MOVIE](state, index) {
      state.topIDs.splice(index, 1);
    },
    [TOGGLE_TITLE](state, bool) {
      state.titleState = bool;
    }
  },
  actions: {
    initMoviesStore: {
      handler({ dispatch }) {
        dispatch('fetchMovies');
      },
      root: true
    },
    async fetchMovies({ getters, commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true });
        const { moviesPerPage, currentPage, slisedIDs } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slisedIDs(from, to);
        const requests = moviesToFetch.map(id => axios.get(`/?i=${id}`));
        const response = await Promise.all(requests);
        commit(MOVIES, serializeData(response));
      } catch (err) {
        console.log(err);
      } finally {
        dispatch('toggleLoader', false, { root: true });
      }
    },
    changeCurrentPage({ dispatch, commit }, value) {
      commit(CURRENT_PAGE, value);
      dispatch('fetchMovies');
    },
    removeMovie({ commit, dispatch, state }, id) {
      const index = state.topIDs.findIndex(item => item === id);
      if (index !== -1) {
        commit(REMOVE_MOVIE, index);
        dispatch('fetchMovies');
      }
    },
    async searchMovie({ commit, dispatch }, searchVal) {
      try {
        dispatch('toggleTitle', true);
        dispatch('toggleLoader', true, { root: true });
        if (!searchVal) {
          dispatch('toggleTitle', false);
          dispatch('fetchMovies');
        }
        const response = await axios.get(`/?s=${searchVal}`);
        if (response.Error) {
          throw Error(response.Error);
        }
        commit(MOVIES, serializeData(response.Search));
      } catch (err) {
        console.log(err.message);
      } finally {
        dispatch('toggleLoader', false, { root: true });
      }
    },
    toggleTitle({ commit }, bool) {
      commit(TOGGLE_TITLE, bool);
    }
  }
};

export default moviesStore;
