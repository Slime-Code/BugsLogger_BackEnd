require('dotenv').config();
import mongoose from 'mongoose';
import express from 'express';
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();

import router from './routes'

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(router)


mongoose.connect('mongodb+srv://JulioDala:slimecode@cluster0.dore1el.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log('connect to the database'));

app.listen(3333, () => console.log("Server running on port 3333..."))