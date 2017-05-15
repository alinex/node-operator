<template>
  <section class="container">
    <h1>
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~plugins/axios'

export default {
  layout: 'title',
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return {
      users: data
    }
  },
  head () {
    return {
      title: 'Users'
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
