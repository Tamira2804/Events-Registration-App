require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const { DB_HOST, PORT = 3000 } = process.env

mongoose
  .connect('mongodb+srv://admin:admin@eventscluster.3lf9cz1.mongodb.net/')
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful', { PORT })
    })
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
