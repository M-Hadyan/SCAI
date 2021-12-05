import newCardApi from '@/api/newCardApi'

export const state = () => ({
  step: 1,
  // Step one
  cardType: null,
  // Step Two
  fullName: '',
  pin: 0,
  confirmPin: 0,

  // Step Three
  addressOne: '',
  addressTwo: '',
  postalCode: '',
  city: '',
  countries: [],
  country: '',
  state: '',

  newCardInfo: [],

  loading: false,
  message: null,
})

export const mutations = {
  SET_COUNTRIES(state, data) {
    state.countries = data
  },
  SET_CARD_TYPE(state, data) {
    state.cardType = data
  },
  NEXT_STEP(state, data) {
    state.step = data
  },
  SET_FULLNAME(state, data) {
    state.fullName = data
  },
  SET_PIN(state, data) {
    state.pin = data
  },
  SET_CONFIRM_PIN(state, data) {
    state.confirmPin = data
  },
  SET_ADDRESS_ONE(state, data) {
    state.addressOne = data
  },
  SET_ADDRESS_TWO(state, data) {
    state.addressTwo = data
  },
  SET_POSTAL_CODE(state, data) {
    state.postalCode = data
  },
  SET_CITY(state, data) {
    state.city = data
  },
  SET_STATE(state, data) {
    state.state = data
  },
  SET_COUNTRY(state, data) {
    state.country = data
  },
  SET_MESSAGE(state, data) {
    state.message = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
  SET_NEW_CARD_INFO(state, data) {
    state.newCardInfo = data
  },
}
export const actions = {
  firstStep({ commit }) {
    commit('NEXT_STEP', 1)
  },
  selectedCard({ commit }) {
    commit('NEXT_STEP', 2)
  },
  cardInformation({ commit }) {
    commit('NEXT_STEP', 3)
  },

  getAllCountries({ commit }) {
    newCardApi(this.$axios)
      .getAllCountries()
      .then((res1) => {
        console.log('res: ', res1)
        commit('SET_COUNTRIES', res1.data)
      })
      .catch((error) => {
        commit('SET_LOADING', false)
      })
  },

  billInformation({ commit }) {
    commit('NEXT_STEP', 4)
  },

  getNewCardInfo({ commit }) {
    newCardApi(this.$axios)
      .getNewCardInfo()
      .then((res) => {
        commit('SET_NEW_CARD_INFO', res.data)
      })
      .catch((error) => {
        commit('SET_LOADING', false)
      })
  },
  

  addNewCard({ commit }) {
    newCardApi(this.$axios)
      .addNewCard({
        cardType: this.state.newCards.cardType,
        fullName: this.state.newCards.fullName,
        pin: this.state.newCards.pin,
        confirmPin: this.state.newCards.confirmPin,
        addressOne: this.state.newCards.addressOne,
        addressTwo: this.state.newCards.addressTwo,
        postalCode: this.state.newCards.postalCode,

        city: this.state.newCards.city,
        state: this.state.newCards.state,
        country: this.state.newCards.country,
      })
      .then(() => {
        this.$router.push('/')
        
      })
      .catch((error) => {
        console.log('error error error: ', error)
        commit('SET_LOADING', false)
      })
  },

}
