import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Adicionais extends BaseSchema {
  protected tableName = 'adicionais'

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
      table.string('adicional')
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
