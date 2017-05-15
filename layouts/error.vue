<template>
  <section class="container">
    <h1 class="code">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'title'
}
</script>

<style scoped lang="stylus">
.code
  font-weight: 900;
  font-size: 4em
  margin: 0

.info
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  
.button
  margin-top: 50px;
</style>
