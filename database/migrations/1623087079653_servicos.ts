import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Servicos extends BaseSchema {
  protected tableName = 'servicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('empresa_id')
        .unsigned()
        .references('id')
        .inTable('empresas')
        .onDelete('cascade')
      table.integer('unidade_id').unsigned().references('id').inTable('unidades')
      table.string('servico')
      table.string('descricao')
      table.decimal('valor')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
