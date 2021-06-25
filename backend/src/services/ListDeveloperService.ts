import axios from 'axios';
import { getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import { Developer } from '../entities/Developer';


interface RequestDTO {
  githubUsername: string;
  techs: string;
  latitude: number;
  longitude: number;
}

class ListDeveloperService {
  private repository: ReturnModelType<typeof Developer>;

  constructor() {
    this.repository = getModelForClass(Developer);
  }

  async execute({ githubUsername, latitude, longitude, techs}: RequestDTO): Promise<Developer> {
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

    const developerListd = await this.repository.List(developer);

    return developerListd;
  }
}


export { ListDeveloperService }