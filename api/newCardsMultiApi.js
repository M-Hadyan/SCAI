export default ($axios) => ({
  END_POINT: '/v2',

  selectedCard(payload) {
      return $axios.post(`${this.END_POINT}/selectedCard`, payload)
    },
    cardInformation(payload) {
      return $axios.post(`${this.END_POINT}/cardInformation`, payload)
    },
    billInformation(payload) {
      return $axios.post(`${this.END_POINT}/billInformation`, payload)
    },
    getAllCountries() {
      return $axios.get(`${this.END_POINT}/countries`)
    },
    
  })

  