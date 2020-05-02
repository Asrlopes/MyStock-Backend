import { Router } from 'express';
import { getRepository } from 'typeorm';

import Companies from '../models/Companies';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateCompanyService from '../services/CreateCompanyService';

const companiesRouter = Router();

// companiesRouter.use(ensureAuthenticated);

companiesRouter.get('/', ensureAuthenticated, async (request, response) => {
  const companiesRepository = getRepository(Companies);
  const companies = await companiesRepository.find();

  return response.json(companies);
});

companiesRouter.post('/', async (request, response) => {
  const {
    name,
    cnpj,
    state_registration,
    email,
    password,
    phone,
    address_id,
  } = request.body;

  const createCompanie = new CreateCompanyService();

  const companie = await createCompanie.execute({
    name,
    cnpj,
    email,
    password,
    phone,
    state_registration,
    address_id,
  });

  return response.json(companie);
});

export default companiesRouter;
