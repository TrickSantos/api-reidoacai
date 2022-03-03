import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrdemServicos extends BaseSchema {
  protected tableName = 'ordem_servicos'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('tipo').notNullable().defaultTo('os')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('tipo')
    })
  }
}
