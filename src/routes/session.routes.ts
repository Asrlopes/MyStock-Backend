import { Router } from 'express';

import AuthenticateCompanyService from '../services/AuthenticateCompanyService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateCompany = new AuthenticateCompanyService();

  const { company, token } = await authenticateCompany.execute({
    email,
    password,
  });

  delete company.password;

  return response.json({ company, token });
});

export default sessionRouter;
