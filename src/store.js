import { createStore } from "vuex"


export default createStore({
  state: {
    session: false,
    data: {
      email: ''
    }
  },
  mutations: {
    UPDATE_SESSION(state, payload) {
      state.session = payload;
    },
    UPDATE_DATA(state, payload) {
      state.data = payload;
    }
  }
})