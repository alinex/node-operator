# MIDDLEWARE

This directory contains your Application Middleware.
The middleware lets you define custom function to be ran before rendering a page or a group of pages (layouts).

Then, in your `nuxt.config.js`, layout or page, use the middleware key:

``` javascript
export default {
  middleware: 'auth'
}
```

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/routing#middleware
