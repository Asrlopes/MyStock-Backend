import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddAddressIdFieldToProviders1587991048111
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'providers',
      new TableColumn({
        name: 'address_id',
        type: 'int',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'providers',
      new TableForeignKey({
        name: 'ProvidersAdress',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'address',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('providers', 'ProvidersAdress');

    await queryRunner.dropColumn('providers', 'address_id');
  }
}
