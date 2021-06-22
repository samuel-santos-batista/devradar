import express from 'express';
import { createConnection } from './database';
import { routes } from './routes';

createConnection()
const app = express();

app.use(routes);

app.use(express.json());

app.listen(3333, ()=>{
  console.log("running...");
})