<template>
  <div>
    <section class="title">
      <img src="../assets/img/Alinex-400.png" alt="Alinex Logo" class="logo" />
      <h1>IT Operator Console</h1>
    </section>
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
  </div>
</template>
<script>
export default {
  props: ['error']
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

.title
  width: 100%;
  padding: 100px 0 0 0;
  text-align: center;
  color: #666;
  font-size: 1.6em;
  h1
    margin-top: 0
</style>
