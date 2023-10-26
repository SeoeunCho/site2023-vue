import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      headerClass: false
    };
  },
  mutations: {
    gnbClicked(state, payload) {
      if (payload.e.target.getAttribute('href') !== '/' && payload.e.target.tagName !== 'EM') {
        state.headerClass = true;
      } else state.headerClass = false;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  actions: {}
});

export default store;
