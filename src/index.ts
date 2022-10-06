import mongoose from 'mongoose';
import express from 'express';
import 'dotenv/config'
import bodyParser from 'body-parser';
import cors from "cors";
const app = express();
import router from './routes'
import logger from './config/logger';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(router)

mongoose.connect(`${process.env.MONGODB_URL}`);
const db = mongoose.connection;
db.on("error", (error) => logger.error(error));
db.once("open", () => logger.info('connect to the database'));

app.listen(process.env.PORT || 3333, () => logger.info(`Server running on port ${process.env.PORT || 3333}...`))