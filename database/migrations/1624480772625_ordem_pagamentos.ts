import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrdemPagamentos extends BaseSchema {
  protected tableName = 'ordem_pagamentos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('ordem_servico_id')
        .unsigned()
        .references('ordem_servicos.id')
        .onDelete('cascade')
      table.enum('forma_pagamento', ['dinheiro', 'credito', 'debito', 'pix', 'prazo']).notNullable()
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
