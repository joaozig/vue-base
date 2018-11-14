import axios from 'axios'
import store from '@/store'
import app from '@/main'

axios.defaults.baseURL = 'http://localhost:3010'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

axios.interceptors.request.use(config => {
  app.$Progress.start()

  if (store.getters['auth/isAuthenticated']) {
    config.headers['Access-Token'] = store.getters['auth/token']
  }

  return config
})

axios.interceptors.response.use(response => {
  app.$Progress.finish()
  return response
}, error => {
  app.$Progress.fail()

  // sets network error status
  if (!error.response) {
    error.response = { status: -1 }
  }

  return Promise.reject(error.response)
})

export default axios