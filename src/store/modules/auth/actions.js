import AuthService from '@/services/AuthService'

const USER_TOKEN_LABEL = 'user-token'

const login = (context, user) => {
  return new Promise((resolve, reject) => {
    AuthService.login(user.email, user.password)
      .then(response => {
        localStorage.setItem(USER_TOKEN_LABEL, response.access_token)
        context.commit('AUTH_SUCCESS', response.access_token)
        resolve()
      }, (error) => {
        context.commit('AUTH_CLEAR_TOKEN')
        localStorage.removeItem(USER_TOKEN_LABEL)

        const errorMessage = error.status == 401 ? 'Email e/ou senha incorretos' : 'Falha de comunicação com servidor'
        reject(errorMessage)
      })
  })
}

const logout = (context) => {
  return new Promise((resolve) => {
    AuthService.logout().then(() => {
      localStorage.removeItem(USER_TOKEN_LABEL)
      context.commit('AUTH_CLEAR_TOKEN')
      resolve()
    })
  })
}

export default {
  login,
  logout
}