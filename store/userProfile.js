import userProfileApi from '../api/userProfileApi.js'

export const state = () => ({
  prfileInfo: [],
  fullname:'',
  fname:'',
  lname:'',
  email:'',
  phone:'',
})

export const mutations = {
  SET_PROFILE_INFO(state, data) {
    state.prfileInfo = data
  },
}

export const actions = {
  getAllUserProfile({ commit }) {
    userProfileApi(this.$axios)
      .getAllUserProfile()
      .then((res) => {
        commit('SET_PROFILE_INFO', res.data)
      })
      .catch((error) => {
        commit('SET_LOADING', false)
      })
  },
}
