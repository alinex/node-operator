<template>
  <footer>
    <a v-bind:href="homepage" target="_blank">{{ title }}</a>
    V {{ version }}
    <span v-if="copyright">– © {{ copyright }}</span>
    <span v-if="copyright">– Licensed under {{ license }}</span>
  </footer>
</template>

<script>
import pjson from '../package.json'

export default {
  data () {
    return {
      title: pjson.title || pjson.name,
      version: pjson.version,
      copyright: pjson.copyright,
      homepage: pjson.homepage,
      license: pjson.license
    }
  }
}
</script>

<style lang="stylus">
footer
  background: #ddd
  padding: 10px
  font-size: 80%
</style>
