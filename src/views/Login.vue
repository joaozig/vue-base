<template>
  <div class="login-container">
    <span class="title">{{ this.$store.getters['auth/isAuthenticated'] }}</span>
    <form @submit.prevent="login()">
      <input type="text" v-model="user.email" placeholder="email" /><br />
      <input type="password" v-model="user.password" placeholder="password" /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
  import AuthService from '@/services/AuthService'

  export default {
    name: 'login',
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$store.dispatch('auth/login', this.user)
          .then(() => {
            this.$router.push({ name: 'admin' })
          }, (errorMessage) => {
            alert(errorMessage)
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
}
</style>