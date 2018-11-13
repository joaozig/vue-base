import AuthService from '@/services/AuthService'

const login = (context, user) => {
  return new Promise((resolve, reject) => {
    AuthService.login(user.email, user.password)
      .then(response => {
        localStorage.setItem('user-token', response.access_token)
        context.commit('AUTH_SUCCESS', response.access_token)
        resolve()
      }, (error) => {
        console.log(error)
        context.commit('AUTH_CLEAR_TOKEN')
        localStorage.removeItem('user-token')
        reject('credenciais inválidas')
      })
  })
}

const logout = (context) => {
  return new Promise((resolve) => {
    localStorage.removeItem('user-token')
    context.commit('AUTH_CLEAR_TOKEN')
    resolve()
  })
}

export default {
  login,
  logout
}