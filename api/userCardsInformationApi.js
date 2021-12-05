export default ($axios) => ({
    END_POINT: '/v2',
    getUserCardsInformation() {
      return $axios.get(`${this.END_POINT}/userCardsInformation`)
    },
  })
  