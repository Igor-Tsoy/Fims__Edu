import '@plugins/axios';
import axios from 'axios';

const moviesStore = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovie(context) {
      console.log(context);
      const movie = await axios.get('/');
      console.log(movie);
    }
  }
};

export default moviesStore;
