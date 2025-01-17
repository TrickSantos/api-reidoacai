import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Empresas extends BaseSchema {
  protected tableName = 'empresas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('razao_social').unique()
      table.string('nome_fantasia').unique()
      table.string('cnpj_cpf').unique()
      table.string('email').unique()
      table.string('telefone')
      table.string('endereco')
      table.boolean('status').defaultTo(true)
      table.enum('plano', ['Admin', 'Basico']).defaultTo('Basico')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
