import { Router } from 'express';
import { Repository } from 'typeorm';

import Companies from '../models/Companies';

const companiesRouter = Router();

companiesRouter.get('/', async (request, response) => {
  const repository = new Companies();
  const companiesRepository = Repository(repository);
});

export default companiesRouter;
