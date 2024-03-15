const { loginUser, signupUser } = require('../Controllers/AuthController')

const router = require('express').Router()

router.route('/login')
  .post(async (req, res) => {
    try {
      const credentials = req.body
      await loginUser(credentials, (error, result) => {
        if (error) {
          return res.status(403).send(error)
        }
        return res.send(result)
      })
    } catch (error) {
      console.error(error)
      return res.status(403).send(error)
    }
  })

router.route('/register')
  .post(async (req, res) => {
    try {
      const credentials = req.body
      await signupUser(credentials, (error, result) => {
        console.log('AUTH_CREDENTIALS')
        if (error) {
          return res.status(403).send(error)
        }
        return res.send(result)
      })
    } catch (error) {
      console.error(error)
      return res.status(403).send(error)
    }
  })

module.exports = router
