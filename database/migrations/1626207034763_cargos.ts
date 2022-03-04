import BaseSchema from '@ioc:Adonis/Lucid/Schema'

const base = {
  criar: true,
  visualizar: true,
  atualizar: true,
  apagar: true,
}

export default class Cargos extends BaseSchema {
  protected tableName = 'cargos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('empresa_id').unsigned().references('empresas.id')
      table.string('nome')
      table.json('pedidos').defaultTo(JSON.stringify(base))
      table.json('adicionais').defaultTo(JSON.stringify(base))
      table.json('clientes').defaultTo(JSON.stringify(base))
      table.json('unidades').defaultTo(JSON.stringify(base))
      table.json('fornecedores').defaultTo(JSON.stringify(base))
      table.json('a_pagar').defaultTo(JSON.stringify(base))
      table.json('a_receber').defaultTo(JSON.stringify(base))
      table.json('caixa').defaultTo(JSON.stringify(base))
      table.json('empresas').defaultTo(JSON.stringify(base))
      table.json('usuarios').defaultTo(JSON.stringify(base))
      table.json('cargos').defaultTo(JSON.stringify(base))
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
