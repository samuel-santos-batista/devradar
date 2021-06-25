import { Router } from "express";
import axios from 'axios';

const routes = Router();

routes


routes.get('/devs', async (request, reponse) =>{
  const { techs, longitude, latitude }= request.body;

  //Service
  const devs = await Dev.find({
    techs: {
      $in: techsArray,
    },
    location : {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxxDistance: 10000,
      }
    }
  })
});


export { routes };
