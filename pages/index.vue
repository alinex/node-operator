<template>
  <section class="container">
    <h1>Pre Alpha Version</h1>
    <nuxt-link class="button" to="/user">Users</nuxt-link>
    <nuxt-link class="button" to="/secret">Secret Page</nuxt-link>
    <nuxt-link class="button" to="/not-there">File not Found</nuxt-link>
  </section>
</template>

<script>
export default {
  layout: 'title',
  head () {
    return {
      title: 'Welcome'
    }
  }
}
</script>

<style scoped lang="stylus">
.title
  margin: 0 0 80px 0;
  color: #666;

.users
  list-style: none;
  margin: 0;
  padding: 0;

.user
  margin: 10px 0;
</style>
