import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pedidos extends BaseSchema {
  protected tableName = 'pedidos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cliente_id').unsigned().references('clientes.id').onDelete('cascade')
      table.integer('empresa_id').unsigned().references('empresas.id').onDelete('cascade')
      table.text('observacoes')
      table.string('status').defaultTo('Em aberto')
      table.decimal('valor')
      table.dateTime('entrega')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
