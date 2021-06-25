import { Request, Response } from 'express';

import { ListDeveloperService } from '../services/ListDeveloperService';

class ListDeveloperController {
  public async handle(request: Request, reponse: Response): Promise<Response> {
    const { techs, longitude, latitude } = request.body;
   
    const ListDeveloperService = new ListDeveloperService();

    const dev = ListDeveloperService.execute({ 
      techs, 
      latitude, 
      longitude
    });

    return reponse.json(dev);
  }
}

export { ListDeveloperController }