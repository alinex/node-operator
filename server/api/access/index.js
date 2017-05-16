import { Router } from 'express'

import auth from './auth'
import user from './user'

var router = Router()

// Add Routes
router.use('/auth', auth)
router.use('/user', user)

export default router
