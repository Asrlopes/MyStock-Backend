import { EntityRepository, Repository } from 'typeorm';

import Companies from '../models/Companies';

@EntityRepository(Companies)
class CompaniesRepository extends Repository<Companies> {
  public async getDate(): Promise<void> {
    // const companies = await this.find();
    // return { companies };
  }
}

export default CompaniesRepository;
