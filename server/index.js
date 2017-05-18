import Nuxt from 'nuxt'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import session from 'express-session'

import api from './api'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const production = process.env.NODE_ENV === 'production'

// setup express app
const app = express()
app.set('port', port)

// Body parser, to access req.body
app.use(bodyParser.json())

// Sessions to create req.session
var FileStore = require('session-file-store')(session)
app.use(session({
  store: new FileStore({ path: './local/sessions' }),
  name: 'alinex',
  secret: 'LfB6OBF02uEP2',
  resave: false,
  saveUninitialized: true,
  unset: 'destroy'
}))

// Enable logging to stdout
app.use(morgan(production ? 'combined' : 'tiny'))

// Initialize nuxt
let config = require('../nuxt.config.js')
config.dev = !production
const nuxt = new Nuxt(config)

// Set routes
app.use('/api', api) // server api routes
app.use(nuxt.render) // client content

// Build only in dev mode
if (!production) {
  nuxt.build()
  .catch((error) => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
}

// Configure server
var server = app // default http
var protocol = 'http'
if (production) {
  // Setup HTTPS
  var https = require('https')
  var fs = require('fs')
  var options = {
    key: fs.readFileSync('server/ssl/private.key'),
    cert: fs.readFileSync('server/ssl/certificate.pem')
  }
  server = https.createServer(options, app)
  protocol = 'https'
}

// Start server
server.listen(port, host, null, () => {
  console.log('Server listening on ' + protocol + '://' + host + ':' + port) // eslint-disable-line no-console
})
