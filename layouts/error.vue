<template>
  <section class="container">
    <h1 class="status">
      {{ error.statusCode || 500 }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>

    <div class="detail" v-if="error.detail">
      <code v-for="(value, key, index) in error.detail">
      <h4>{{ key }}:</h4>
      <span class="data">{{ value }}</span><br />
      </code>
    </div><br />

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
.status
  font-weight: 900;
  font-size: 4em
  margin: 0
.info
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
.detail
  display: inline-block
  margin-top: 40px
  padding: 20px
  text-align: left
  border: solid black 1px
  background: #ddd
  code:first-child
    h4
      margin-top: 0
  .data
    white-space: pre-wrap

.button
  margin-top: 50px;
</style>
