import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ufs extends BaseSchema {
  protected tableName = 'ufs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('uf').unique()
      table.string('nome')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
