import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProviders1587935177678
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'providers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'cnpj',
            type: 'varchar(14)',
            isUnique: true,
          },
          {
            name: 'state_registration',
            type: 'varchar(9)',
            isUnique: true,
          },
          {
            name: 'phone',
            type: 'varchar(15)',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: ' now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: ' now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('providers');
  }
}
