# STATIC

If you don't want to use Webpacked Assets from the assets directory, you can create and use the static directory in your project root directory.

These files will be automatically serve by Nuxt and accessible in your project root URL.

This option is helpful for files like robots.txt, sitemap.xml or CNAME (for like GitHub Pages).

From your code you can then reference those files with / URLs:

``` html
<!-- Static image from static directory -->
<img src="/my-image.png"/>

<!-- Webpacked image from assets directory -->
<img src="/assets/my-image-2.png"/>
```

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/assets#static
