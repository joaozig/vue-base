const AUTH_SUCCESS = (state, token) => {
  state.token = token
}

const AUTH_CLEAR_TOKEN = (state) => {
  state.token = ''
}

export default {
  AUTH_SUCCESS,
  AUTH_CLEAR_TOKEN,
}