require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const { DB_HOST, PORT = 3001 } = process.env

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful', { PORT })
    })
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })