# COMPONENTS

The `components` directory contains your Vue.js Components. Nuxt.js doesn't supercharge the data method on these components.

You may load them into your layouts or pages using:

``` javascript
import PageFooter from '~components/PageFooter.vue'

export default {
  components: {
    PageFooter
  }
}
```

And then address them directly in your Vue templates.

``` html
<div>
  <nuxt/>
  <page-footer/>
</div>
```

The _CamelCase_ names will be referenced as _dashed tags_ within your template.

More information about the usage of this directory in the documentation:
https://vuejs.org/v2/guide/components.html
