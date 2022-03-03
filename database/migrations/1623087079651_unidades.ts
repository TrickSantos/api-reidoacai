import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Unidades extends BaseSchema {
  protected tableName = 'unidades'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('empresa_id').unsigned().references('id').inTable('empresas')
      table.string('nomenclatura')
      table.string('unidade')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
