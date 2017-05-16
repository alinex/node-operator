import Nuxt from 'nuxt'
import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import morgan from 'morgan'

import api from './api'

const app = express()

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)

// Body parser, to access req.body
app.use(bodyParser.json())

// Sessions to create req.session
app.use(session({
  secret: 'LfB6OBF02uEP2',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// Enable logging to stdout
app.use(morgan('combined'))

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
if (config.dev) {
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
} else {
  // Setup HTTPS
  var https = require('https')
  var fs = require('fs')
  var options = {
    key: fs.readFileSync('server/private.key'),
    cert: fs.readFileSync('server/certificate.pem')
  }
  https.createServer(options, app).listen(port, host)
  console.log('Server listening on https://' + host + ':' + port) // eslint-disable-line no-console
}
