import axios from 'axios';

interface RequestDTO {
  githubUsername: string;
  techs: string;
  latitude: number;
  longitude: number;
}

class CreateDeveloperService {
  async execute({ githubUsername, latitude, longitude, techs}: RequestDTO) {
    const githubUser = await axios.get(`https://api.github.com/users/${githubUsername}`);
      
    const { name, avatar_url: avatarUrl, bio } = githubUser.data;

    const techsArray = techs.slit(',').map(tech => tech.trim());

    const location = {
      type: 'Point',
      coordenate: [longitude, latitude]
    };

    const developer = {
      githubUsername,
      name,
      avatarUrl,
      bio,
      techsArray,
      location
    };

    return developer;
  }
}


export { CreateDeveloperService }