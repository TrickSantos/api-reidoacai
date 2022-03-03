import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clientes extends BaseSchema {
  protected tableName = 'clientes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('empresa_id').unsigned().references('empresas.id').onDelete('cascade')
      table.string('nome')
      table.string('razao_social')
      table.integer('cidade_id').unsigned().references('id').inTable('cidades')
      table.string('telefone')
      table.string('email')
      table.string('cnpj_cpf', 14).unique()
      table.json('endereco').defaultTo(
        JSON.stringify({
          bairro: '',
          logradouro: '',
          numero: '',
          complemento: '',
          cep: '',
        })
      )
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
