import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Produtos extends BaseSchema {
  protected tableName = 'produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('empresa_id')
        .unsigned()
        .references('empresas.id')
        .onDelete('cascade')
        .notNullable()
      table.integer('unidade_id').unsigned().references('unidades.id').notNullable()
      table.string('nome').notNullable()
      table.string('descricao')
      table.decimal('valor').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
