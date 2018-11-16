<template>
  <div id="nav">
    <div class="sidebar">
      <router-link to="/">Home</router-link><br />
      <router-link to="/about">About</router-link><br />
      <router-link to="/login">Login</router-link><br />
      <router-link to="/admin">Admin</router-link>
    </div>
    <div class="content">
      <slot />
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
#nav {
  background-color: peru;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .sidebar {
    float: left;
    width: 160px;
    height: 100%;
    background-color: #222;
  }

  .content {
    margin-left: 160px;
  }
}
</style>