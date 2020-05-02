import { Router } from 'express';

import companiesRouter from './companies.routes';
import sessionRouter from './session.routes';

const routes = Router();

routes.use('/companies', companiesRouter);
routes.use('/session', sessionRouter);

export default routes;
