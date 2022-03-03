import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pagars extends BaseSchema {
  protected tableName = 'pagar'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('empresa_id').unsigned().references('empresas.id').onDelete('cascade')
      table.integer('fornecedor_id').unsigned().references('fornecedores.id').onDelete('cascade')
      table.decimal('valor')
      table.enum('status', ['pago', 'aguardando', 'vencido'])
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
