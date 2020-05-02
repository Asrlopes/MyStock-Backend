import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CompaniesRepository from '../repositories/CompaniesRepository';

const companiesRouter = Router();

companiesRouter.get('/', async (request, response) => {
  const companiesRepository = getCustomRepository(CompaniesRepository);
  const companies = await companiesRepository.find();

  return response.json(companies);
});

export default companiesRouter;
