import axios from '@/axios'

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    axios.post('/maker/session', { email: email, password: password })
      .then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
  })
}

const logout = () => {
  return new Promise(resolve => {
    axios.delete('/maker/session').then().catch().then(() => resolve())
  })
}

export default {
  login,
  logout
}