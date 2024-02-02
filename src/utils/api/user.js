import axios from '../axios.js'

export default {
  doLogin(data) {
    return axios.post('/user/login', data)
  },
  getCurrentUser() {
    return axios.get('user/')
  },
  getUserById(userId) {
    return axios.get('/user/' + userId)
  }
}
