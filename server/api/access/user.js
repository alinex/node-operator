import { Router } from 'express'

var router = Router()

// Mock Users
const users = [
  { name: 'Till' },
  { name: 'Alexandre' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/', function (req, res) {
  res.json(users)
})

/* GET user by ID. */
router.get('/:id', function (req, res, next) {
//  if (typeof req.session.authUser === 'undefined') {
//    return next({ statusCode: 401, message: "Unauthorized" })
//  }
  var id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    next({ statusCode: 404, message: 'User not found' })
  }
})

export default router
