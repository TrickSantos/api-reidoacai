import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OsServicos extends BaseSchema {
  protected tableName = 'os_servicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('ordem_servico_id')
        .unsigned()
        .references('ordem_servicos.id')
        .onDelete('cascade')
      table.integer('servico_id').unsigned().references('servicos.id')
      table.integer('quantidade').defaultTo(0)
      table.decimal('desconto').defaultTo(0)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
