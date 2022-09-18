import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dbConnect from './db/connection.js';
import Routes from './routes/taskRoutes.js';

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);

dbConnect();

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log(`Listening to port ${app.get('port')}`);
});