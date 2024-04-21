const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const apiRouter = require("./routes/index")
const app = express()

mongoose.connect('mongodb://localhost:27017/FoodDelivery')
  .then(() => console.log('Connected!'));

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/", apiRouter);

app.listen(3000, function () {
    console.log('server listening on port 3000')
  })