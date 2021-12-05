export default ($axios) => ({
  END_POINT: '/v2',
  getAllTransations() {
    return $axios.get(`${this.END_POINT}/Transations`)
  },
})
