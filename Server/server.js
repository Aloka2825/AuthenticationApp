import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
