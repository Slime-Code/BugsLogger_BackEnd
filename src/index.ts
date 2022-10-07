import mongoose from 'mongoose';
import express from 'express';
import 'dotenv/config'
import bodyParser from 'body-parser';
import cors from "cors";
import apiSchema from './api-schema.json'
import swaggerUi from 'swagger-ui-express'
import * as OpenApiValidator from 'express-openapi-validator';
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';
const app = express();

import router from './routes'
import logger from './config/logger';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSchema));
app.use(
 OpenApiValidator.middleware({
  apiSpec: apiSchema as OpenAPIV3.Document,
  validateRequests: true, //will be implemented in step2
  validateResponses: true, //will be implemented in step2
 })
);
app.use(cors());
app.use(router)

mongoose.connect(`${process.env.MONGODB_URL}`);
const db = mongoose.connection;
db.on("error", (error) => logger.error(error));
db.once("open", () => logger.info('connect to the database'));

app.listen(process.env.PORT || 3333, () => logger.info(`Server running on port ${process.env.PORT || 3333}...`))