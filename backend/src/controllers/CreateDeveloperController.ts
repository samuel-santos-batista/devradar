import { Request, Response } from 'express';
import { getModelForClass, ReturnModelType } from "typegoose";

import { CreateDeveloperService } from '../services/CreateDeveloperService';

class CreateDeveloperController {
  private repository: ReturnModelType<typeof Category>;

  constructor() {
    this.repository = getModelForClass(Category);
  }
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