import { Router } from 'express'

import auth from './auth'
import users from './users'

var router = Router()

// Add Routes
router.use('/auth', auth)
router.use('/user', users)

export default router
