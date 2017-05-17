<template>
  <div>
    <section class="title">
      <a href="/" title="Homepage"><img src="~assets/img/Alinex-400.png" alt="Alinex Logo" class="logo" /></a>
      <h1>IT Operator Console</h1>
    </section>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style lang="stylus">
section.container
  margin: 0;
  width: 100%;
  padding: 50px 0;
  text-align: center;

.button, .button:visited
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;

.button:hover, .button:focus
  color: #fff;
  background-color: #000;

section.title
  width: 100%;
  padding: 100px 0 0 0;
  text-align: center;
  color: #666;
  font-size: 1.6em;
  h1
    margin-top: 0
</style>
