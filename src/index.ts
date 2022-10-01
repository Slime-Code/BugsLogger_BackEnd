require('dotenv').config();
import mongoose from 'mongoose';
import express from 'express';
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();

import router from './routes'
import logger from './config/logger';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(router)


mongoose.connect('mongodb://localhost:27017/bglog');
const db = mongoose.connection;
db.on("error", (error) => logger.error(error));
db.once("open", () => logger.info('connect to the database'));

app.listen(3333, () => logger.info("Server running on port 3333..."))