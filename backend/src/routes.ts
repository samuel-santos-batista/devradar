import { Router } from "express";
import axios from 'axios';

const routes = Router();

routes.post('/devs', async (request, reponse)=>{
  const { githubUsername, techs, latitude, longitude }= request.body;
 
  const githubUser = await axios.get(`https://api.github.com/users/${githubUsername}`);

  const { name, avatar_url: avatarUrl, bio } = githubUser.data;
  
  const techsArray = techs.slit(',').map(tech => tech.trim())
 
  const location = {
    type: 'Point',
    coordenate: [longitude, latitude]
  }

  const developer = {
    githubUsername,
    name,
    avatarUrl,
    bio,
    techsArray,
    location
  }

  return reponse.json({});
});


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
