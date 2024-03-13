/**
 * on récupère express
 * on récupère les middlewares de sécurité helmet et cors
 * on définit le port
 */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const { init } = require('./src/services/db')

const port = 3000

// on créer une app express = une API
const app = express()

// installation des middlewares de sécurité
app.use(helmet())
app.use(cors())

// middleware de décodage des requêtes
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// middleware qui permet de connecter l'API
app.use(morgan('dev'))

// connexion à la bdd
init()

/**
 * on créer les routes de l'API
 * on lance le serveur
 */
app.get('/', (req, res) => {
  res.send('Coucou')
})

app.use('/todos', require('./src/routes/todos'))

app.listen(port, () => {
  console.log('Server is listenning on port : ' + port)
})
