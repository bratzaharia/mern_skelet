import config from './../config/config'
import app from './express'
const mongoose = require("mongoose");


// DB Config
const db = config.mongoURI;

// Connect to MongoDB
mongoose.connect(db,  { useNewUrlParser: true })
  .then(() => console.log('And ... MongoDB successfully connected from server.js!!!'))
  .catch(err => console.log(err))



app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})