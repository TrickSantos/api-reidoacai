import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pagars extends BaseSchema {
  protected tableName = 'pagar'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('empresa_id')
        .unsigned()
        .references('empresas.id')
        .onDelete('cascade')
        .notNullable()
      table.integer('fornecedor_id').unsigned().references('fornecedores.id').onDelete('cascade')
      table.decimal('valor').notNullable()
      table.enum('status', ['pago', 'aguardando', 'vencido']).defaultTo('aguardando')
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
