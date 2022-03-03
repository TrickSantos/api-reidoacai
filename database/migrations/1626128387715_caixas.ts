import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Caixas extends BaseSchema {
  protected tableName = 'caixas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('empresa_id').unsigned().references('empresas.id').onDelete('cascade')
      table.date('data')
      table.decimal('valor').defaultTo(0)
      table.boolean('status').defaultTo(true).comment('true = aberto, false = fechado')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
