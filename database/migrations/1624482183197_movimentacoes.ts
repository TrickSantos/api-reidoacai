import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movimentacoes extends BaseSchema {
  protected tableName = 'movimentacoes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('empresa_id')
        .unsigned()
        .references('empresas.id')
        .onDelete('cascade')
        .notNullable()
      table
        .integer('created_by')
        .unsigned()
        .references('users.id')
        .onDelete('cascade')
        .notNullable()
      table.string('descricao')
      table.decimal('valor').notNullable()
      table.enum('tipo', ['entrada', 'saida']).notNullable()
      table.enum('origem', ['pedidos', 'outros']).notNullable()
      table.date('data').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
