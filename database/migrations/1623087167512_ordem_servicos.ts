import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrdemServicos extends BaseSchema {
  protected tableName = 'ordem_servicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cliente_id').unsigned().references('clientes.id').onDelete('cascade')
      table.integer('empresa_id').unsigned().references('empresas.id').onDelete('cascade')
      table.string('etiqueta')
      table.text('produto_analise')
      table.text('observacoes')
      table.text('problema')
      table.string('status').defaultTo('Em aberto')
      table.text('solucao')
      table.decimal('valor')
      table.integer('garantia')
      table.dateTime('entrega')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
