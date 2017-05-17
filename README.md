# Alinex Operator

> Nuxt.js project

## Used Technologies

- Base Template [Nuxt/Express](https://github.com/nuxt/express)
- Framework [NuxtJS](https://nuxtjs.org/)
- View Component [Vue 2](https://github.com/vuejs/vue)
- Client Router [Vue-Router](https://github.com/vuejs/vue-router)
- [Vue-Meta](https://github.com/declandewet/vue-meta)
- [Vue-loader](https://github.com/vuejs/vue-loader)
- [Webpack](https://github.com/webpack/webpack)
- Logging with [morgan](https://github.com/expressjs/morgan)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start
```

## Page Structure

__Basic Pages__

    /       System Title
    /login      

## REST API

In the following paragraphs some of the API calls are described with:
- Http Method
- URI
- Query Parameter (starting with '?')
- Post Parameter
- Group allowed (starting with '@')

In general `GET` and `HEAD` are always the same but without values in `HEAD`.

__General Scheme__

    HEAD    /api/<group>/<object>/<access>  // check for existence
    GET     /api/<group>/<object>/<access>  // get object(s)/<value>
    POST    /api/<group>/<object>/<access>  // change object(s)
    PUT     /api/<group>/<object>/<access>  // add/replace object(s)
    DELETE  /api/<group>/<object>/<access>  // delete object(s)


Search for objects:

    HEAD    /api/db/person/search/name/Hund
    GET     /api/db/person/search/name/Hund
    GET     /api/db/person/search
            ?status_type_id=999009&name=%Hund%

Accessing an individual object:

    HEAD    /api/db/person/id/12345678
    GET     /api/db/person/id/12345678

Change object (changes in POST-DATA):

    POST    /api/db/person/id/12345678
            status_type_id=999020
    POST    /api/db/person/search/name/Hund
            status_type_id=999020
    POST    /api/db/person/search
            ?status_type_id=999009&name=%Hund%
            status_type_id=999020

Insert/replace/remove the object completely:

    PUT     /api/db/person
            name=..., ...
    PUT     /api/db/person/id/12345678
            name=..., ...
    DELETE  /api/db/person/id/12345678

### Access Management

The rights are based on the groups in which an user is member of. It is persisted
within a json file on disk.

__Authentication__

    POST    /api/access/auth/login
            user=<string>, password=<string>
    POST    /api/access/auth/logout

__User Management__

    GET     /api/access/user                   @admin
            ?email=<string>
    GET     /api/access/user/<string>                         // nopasswd
    PUT     /api/access/user/<string>                         // register
            password=<string>, email=<string>
    POST    /api/access/user/<string>          @self, @admin
            password=<string>, email=<string>
    DELETE  /api/access/user/<string>          @self, @admin

__Groups__

    GET     /api/access/group                                 // rights  
            ?user=<string>
    GET     /api/access/group/<string>                        // users          
    PUT     /api/access/group/<string>         @admin         // new group
    DELETE  /api/access/group/<string>         @admin         // remove group
    PUT     /api/access/group/<string>/member/<string>  @admin
    DELETE  /api/access/group/<string>/member/<string>  @admin
