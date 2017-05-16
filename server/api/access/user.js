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
router.get('/:id', function (req, res) {
  if (typeof req.session.authUser === 'undefined') {
    return res.sendStatus(401)
  }
  var id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
