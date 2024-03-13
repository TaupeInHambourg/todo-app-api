const router = require('express').Router()
const { getTodos, deleteTodoById, updateTodo, createTodo } = require('../Controllers/TodoController')

router.route('/')
  .get(async (req, res) => {
    try {
      const todos = await getTodos()
      return res.json(todos)
    } catch (error) {
      console.error(error)
      return res.status(500).send(500)
    }
  })

  .post(async (req, res) => {
    try {
      await createTodo(req.body)
      const todos = await getTodos()
      return res.json(todos)
    } catch (error) {
      return res.status(500).send(error)
    }
  })

  .delete(async (req, res) => {
    try {
      await deleteTodoById(req.body.id)
      const todos = await getTodos()
      return res.json(todos)
    } catch (error) {
      return res.status(500).send(error)
    }
  })

  .put(async (req, res) => {
    try {
      await updateTodo(req.body)
      const todos = await getTodos()
      return res.json(todos)
    } catch (error) {
      return res.status(500).send(error)
    }
  })

module.exports = router
