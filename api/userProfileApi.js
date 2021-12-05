export default ($axios) => ({
    END_POINT: '/v2',
    updateUserProfile(payload) {
        return $axios.post(`${this.END_POINT}/userProfile`, payload)
      },
      getAllUserProfile() {
        return $axios.get(`${this.END_POINT}/userProfile`)
      },
      
    })
  
    