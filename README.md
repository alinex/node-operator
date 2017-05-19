# Alinex Operator

[![GitHub watchers](
  https://img.shields.io/github/watchers/alinex/node-operator.svg?style=social&label=Watch&maxAge=86400)](
  https://github.com/alinex/node-operator/subscription)<!-- {.hidden-small} -->
[![GitHub stars](
  https://img.shields.io/github/stars/alinex/node-operator.svg?style=social&label=Star&maxAge=86400)](
  https://github.com/alinex/node-operator)
[![GitHub forks](
  https://img.shields.io/github/forks/alinex/node-operator.svg?style=social&label=Fork&maxAge=86400)](
  https://github.com/alinex/node-operator)<!-- {.hidden-small} -->
<!-- {p:.right} -->

[![npm package](
  https://img.shields.io/npm/v/alinex-operator.svg?maxAge=86400&label=latest%20version)](
  https://www.npmjs.com/package/alinex-operator)
[![latest version](
  https://img.shields.io/npm/l/alinex-operator.svg?maxAge=86400)](
  #license)<!-- {.hidden-small} -->
[![Travis status](
  https://img.shields.io/travis/alinex/node-operator.svg?maxAge=86400&label=develop)](
  https://travis-ci.org/alinex/node-operator)
[![Gemnasium status](
  https://img.shields.io/gemnasium/alinex/node-operator.svg?maxAge=86400)](
  https://gemnasium.com/alinex/node-operator)
[![GitHub issues](
  https://img.shields.io/github/issues/alinex/node-operator.svg?maxAge=86400)](
  https://github.com/alinex/node-operator/issues)<!-- {.hidden-small} -->

This is a full featured web application including newest client and server technologies
to make it a work base for IT Operators and other technical stuff.

The application is build on top of the following technologies:
- Framework [NuxtJS](https://nuxtjs.org/)
- View Component [Vue 2](https://github.com/vuejs/vue)
- Client Router [Vue-Router](https://github.com/vuejs/vue-router)
- Server [ExpressJS](http://expressjs.com/)
- Testing [intern](https://theintern.github.io)

And also used are the following helpers:
- Vue extensions [meta](https://github.com/declandewet/vue-meta) and
  [loader](https://github.com/vuejs/vue-loader)
- Build System [Backpack](https://github.com/palmerhq/backpack) and
  [Webpack](https://github.com/webpack/webpack)
- Logging with [morgan](https://github.com/expressjs/morgan)
- and more...

The operator application is a Frontend to manage complex IT structures. It displays
the complete structure in an object oriented way while objects may be:
- database objects
- systems
- processes with their logs

These operation objects maybe linked with each other and are allowed to:
- be searched for
- display with their data
- start actions on them
- monitor them

In the end it gives you the ability to click your way through all your systems and
data within some mouseclicks in your browser.


## Usage

**In the moment this is in heavy development and not really ready for productive use.**

To try it out:

``` bash
# install it
$ npm install https://github.com/alinex/node-operator

# serve with hot reload
$ cd node_modules/node-operator
$ npm run dev

# build for production and launch server
$ cd node_modules/node-operator
$ npm run build
$ npm start
```

## Page Structure

__Basic Pages__

    /           System Start
    /login      Login Page

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

__Response__

The response will always be json:

    # identification
    date: <Date>
    uri: <String>
    statusCode: <Integer>
    message: <String>

If the response contains some data it will also have:

    # meta information
    meta:
      title: <String>
      description: <String>
      data: HashMap cols<Object>
    # content data
    data: Array<Object rows>

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


## License

(C) Copyright 2016-2017 Alexander Schilling

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

>  <https://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
