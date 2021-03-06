import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

import Companies from '../models/Companies';

interface Request {
  email: string;
  password: string;
}

interface Response {
  company: Companies;
  token: string;
}

class AuthenticateCompanyService {
  public async execute({ email, password }: Request): Promise<Response> {
    const companyRepository = getRepository(Companies);

    const company = await companyRepository.findOne({ where: { email } });

    if (!company) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordMatched = await compare(password, company.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: company.id,
      expiresIn,
    });

    return {
      company,
      token,
    };
  }
}

export default AuthenticateCompanyService;
