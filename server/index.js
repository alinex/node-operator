import Nuxt from 'nuxt'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import session from 'express-session'

import api from './api'

const app = express()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)

// Body parser, to access req.body
app.use(bodyParser.json())

// Sessions to create req.session
var FileStore = require('session-file-store')(session);
app.use(session({
  store: new FileStore,
  secret: 'LfB6OBF02uEP2',
  resave: false,
  saveUninitialized: false
}));

// Enable logging to stdout
//app.use(morgan('combined'))
app.use(morgan('tiny'))

// Import API Routes
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  nuxt.build()
  .catch((error) => {
    console.error(error) // eslint-disable-line no-console
    process.exit(1)
  })
}

// Listen the server
var server = app // default http
var protocol = 'http'
if (!config.dev) {
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

server.listen(port, host, null, () => {
  console.log('Server listening on ' + protocol + '://' + host + ':' + port) // eslint-disable-line no-console
})
