# PAGES

The `pages` directory contains your Application Views and Routes. The framework reads
all the `.vue` files inside this directory and create the router of your application.

Every Page component is a Vue component, but Nuxt.js adds special keys to make the development of your universal application the easiest way possible.

``` vue
<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
export default {
  asyncData (context) {
    // called every time before loading the component
    return { name: 'World' }
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  head () {
    // Set Meta Tags for this Page
  },
  // and more functionality to discover
  ...
}
</script>

<style>
.red {
  color: red;
}
</style>
```

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/views#pages
