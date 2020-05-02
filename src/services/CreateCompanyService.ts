import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import Companies from '../models/Companies';

interface Request {
  name: string;

  cnpj: string;

  state_registration: string;

  email: string;

  password: string;

  phone: string;

  address_id: number;
}

class CreateCompanyService {
  public async execute({
    name,
    cnpj,
    state_registration,
    email,
    password,
    phone,
    address_id,
  }: Request): Promise<Companies> {
    const companiesRepository = getRepository(Companies);

    const checkEmailExists = await companiesRepository.findOne({
      where: { email },
    });

    const checkCnpjExists = await companiesRepository.findOne({
      where: { cnpj },
    });
    const checkStateRegistrationExists = await companiesRepository.findOne({
      where: { state_registration },
    });

    if (checkEmailExists || checkCnpjExists || checkStateRegistrationExists) {
      throw new AppError(
        'Company already exist, Check if Email/Cnpj or State Registration are already stored',
      );
    }

    const hashedPassword = await hash(password, 8);

    const company = companiesRepository.create({
      name,
      cnpj,
      state_registration,
      email,
      password: hashedPassword,
      phone,
      address_id,
    });

    await companiesRepository.save(company);

    return company;
  }
}

export default CreateCompanyService;
