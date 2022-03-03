import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cidades extends BaseSchema {
  protected tableName = 'cidades'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('uf_id').unsigned().references('id').inTable('ufs').notNullable()
      table.string('cidade').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
