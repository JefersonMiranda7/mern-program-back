import { Router } from 'express';
import { SeedController } from '../controllers/seed.controller';

export const seedRoutes: Router = Router();
const seedController = new SeedController();

seedRoutes.get('/', seedController.createSeed)