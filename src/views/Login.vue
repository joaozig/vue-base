<template>
  <div class="login-container">
    <span class="title">{{ this.$store.getters['auth/isAuthenticated'] }}</span><br />
    <span class="error-message" v-show="errorMessage">{{ errorMessage }}</span>
    <form @submit.prevent="login()">
      <input type="text" v-model="user.email" placeholder="email" /><br />
      <input type="password" v-model="user.password" placeholder="password" /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        errorMessage: '',
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.errorMessage = ''
        this.$store.dispatch('auth/login', this.user)
          .then(() => {
            this.$router.push({ name: 'admin' })
          }, (errorMessage) => {
            this.errorMessage = errorMessage
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
.login-container {
  .title {
    font-size: 18px;
  }

  .error-message {
    color: #fff;
    background-color: #ff6767;
  }
}
</style>