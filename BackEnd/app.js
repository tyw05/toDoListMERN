const express = require("express");
const app = express();
const cors = require("cors");
const logger = require('./utils/logger')
const mongoose = require("mongoose");
const config = require("./utils/config");
const tasksRouter = require('./controllers/tasks')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware');
const loginRouter = require("./controllers/login");

mongoose.set("strictQuery", false);

logger.info(config.MONGO_URI)
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("connected to MongoDB")
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.tokenExtractor)
app.use('/api/tasks', tasksRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.errorHandler)

module.exports = app