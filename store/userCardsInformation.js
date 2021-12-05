import userCardsInformationApi from '@/api/userCardsInformationApi'

export const state = () => ({
  cardsList: [],
  loading: false,
  message: null,
})

export const mutations = {
  SET_CARDS_LIST(state, data) {
    state.cardsList = data
  },
  SET_MESSAGE(state, data) {
    state.message = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
}

export const actions = {
  getUserCardsInformation({ commit }) {
    userCardsInformationApi(this.$axios)
      .getUserCardsInformation()
      .then((res) => {
        console.log('res: ', res)
        commit('SET_CARDS_LIST', res.data)
      })
      .catch((error) => {
        commit('SET_LOADING', false)
      })
  },
}
