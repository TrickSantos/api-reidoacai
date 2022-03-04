import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PedidoPagamentos extends BaseSchema {
  protected tableName = 'pedido_pagamentos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pedido_id').unsigned().references('pedidos.id').onDelete('cascade')
      table.enum('forma_pagamento', ['dinheiro', 'credito', 'debito', 'pix']).notNullable()
      table.integer('parcelas').defaultTo(1)
      table.decimal('valor').defaultTo(0)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
