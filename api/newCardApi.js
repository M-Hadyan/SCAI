export default ($axios) => ({
  END_POINT: '/v2',

  addNewCard(payload) {
      return $axios.post(`${this.END_POINT}/newCard`, payload)
    },
    getNewCardInfo() {
      return $axios.get(`${this.END_POINT}/newCard`)
    },
    getAllCountries() {
      return $axios.get(`${this.END_POINT}/countries`)
    },
    
  })

  