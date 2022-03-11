import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Estoques extends BaseSchema {
  protected tableName = 'estoques'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('empresa_id')
        .unsigned()
        .references('empresas.id')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('produto_id')
        .unsigned()
        .references('produtos.id')
        .onDelete('CASCADE')
        .notNullable()
      table.integer('quantidade').notNullable()
      table.enum('tipo', ['entrada', 'saida']).notNullable()
      table.timestamp('created_at', { useTz: true })
      table
        .integer('created_by')
        .unsigned()
        .references('users.id')
        .onDelete('cascade')
        .notNullable()
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
