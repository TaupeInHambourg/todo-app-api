const mongoose = require('mongoose')

async function init () {
  try {
    await mongoose.connect(
      'mongodb+srv://todo-app:i4lWjwyGhyQ260w0@b2-cluster.kokfv8s.mongodb.net/todos?retryWrites=true&w=majority&appName=B2-Cluster'
    )
    console.info('MongoDB connected')
  } catch (error) {
    console.error(error)
  }
}

function close () {
  mongoose.connection.close()
}

module.exports = { init, close }
