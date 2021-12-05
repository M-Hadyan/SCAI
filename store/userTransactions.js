import transationsApi from '../api/transationsApi.js'

export const state = () => ({
  transations: [],
})

export const mutations = {
  SET_TRANSATIONS(state, data) {
    state.transations = data
  },
}

export const actions = {
  getAllTransations({ commit }) {
    transationsApi(this.$axios)
      .getAllTransations()
      .then((res) => {
        commit('SET_TRANSATIONS', res.data)
      })
      .catch((error) => {
        commit('SET_LOADING', false)
      })
  },
}
