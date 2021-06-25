import { Router } from 'express';

import { CreateDeveloperController } from '../controllers/CreateDeveloperController';

const createDeveloperController = new CreateDeveloperController();

const developersRoutes = Router();

developersRoutes.post('/developers', createDeveloperController.handle);