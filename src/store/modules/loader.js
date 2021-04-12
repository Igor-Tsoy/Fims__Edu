import mutations from '../mutations';

const { TOGGLE_LOADER } = mutations;

const loader = {
  state: {
    showLoader: false
  },
  mutations: {
    [TOGGLE_LOADER](state, bool) {
      state.showLoader = bool;
    }
  },
  getters: {
    loaderState: ({ showLoader }) => showLoader
  },
  actions: {
    toggleLoader({ commit }, bool) {
      console.log('toggled');
      commit(TOGGLE_LOADER, bool);
    }
  }
};

export default loader;
