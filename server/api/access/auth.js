import { Router } from 'express'

var router = Router()

// to log in the user and add him to the req.session.authUser
router.post('/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

// to log out the user and remove it from the req.session
router.post('/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

export default router
