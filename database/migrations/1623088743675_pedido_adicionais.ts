import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PedidoAdicionais extends BaseSchema {
  protected tableName = 'pedido_adicionais'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pedido_id').unsigned().references('pedidos.id').onDelete('cascade')
      table.integer('adicional_id').unsigned().references('adicionais.id')
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
