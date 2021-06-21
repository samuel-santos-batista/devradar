import express from 'express';
import { createConnection } from '../database';

createConnection()
const app = express();

app.use(express.json());
 
app.get('/', (request, reponse)=>{
  return reponse.json({})
})

app.listen(3333, ()=>{
  console.log("running...");
})