import { Router } from 'express'

import access from './access'

var router = Router()

// Add Routes
router.use('/access', access)

export default router
