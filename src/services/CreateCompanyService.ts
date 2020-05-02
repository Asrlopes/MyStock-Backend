import { getCustomRepository } from 'typeorm';

import Companies from '../models/Companies';
import CompaniesRepository from '../repositories/CompaniesRepository';

interface Request {
  name: string;

  cnpj: string;

  state_registration: string;

  email: string;

  password: string;

  phone: string;
}

class CreateCompanyService {
  public async execute({
    name,
    cnpj,
    state_registration,
    email,
    password,
    phone,
  }: Request): Promise<Companies> {
    const companiesRepository = getCustomRepository(CompaniesRepository);
  }
}

export default CreateCompanyService;
