<template>
  <div>
    ADMIN
    <button @click="logout()">logout</button>
  </div>
</template>

<script>
  export default {
    name: 'admin',
    methods: {
      logout() {
        this.$store.dispatch('auth/logout').then(() => {
          this.$router.push({ name: 'login' })
        })
      }
    }
  }
</script>

<style scoped>

</style>