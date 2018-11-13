import axios from '@/axios'

export default {
  login(email, password) {
    return new Promise((resolve, reject) => {
      axios.post('/maker/session', { email: email, password: password })
        .then(response => {
          console.log(response)
          resolve(response.data)
        }).catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }
}