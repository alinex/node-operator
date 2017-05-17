import { Router } from 'express'
import util from 'util'

import access from './access'

var router = Router()

// Add Routes
router.use('/access', access)

router.use(function (err, req, res, next) {
    /* We log the error internaly */
    console.error('ERROR: ' + util.inspect(err).replace(/\s+/, ' '))

    var data = { statusCode: err.statusCode || 500, message: err.message || 'Internal Error'}

    // add stack in development mode
    if (req.app.get('env') === 'development') {
        data.stack = err.stack
    }

    /* Finaly respond to the request */
    res.status(data.statusCode).json(data)
})

export default router
