import { Request, Response } from 'express';

import { CreateDeveloperService } from '../services/CreateDeveloperService';

class CreateDeveloperController {
  public async handle(request: Request, reponse: Response): Promise<Response> {
    const { githubUsername, techs, latitude, longitude } = request.body;
   
    const createDeveloperService = new CreateDeveloperService();

    const dev = createDeveloperService.execute({ 
      githubUsername, 
      techs, 
      latitude, 
      longitude
    });

    return reponse.json(dev);
  }
}

export { CreateDeveloperController }