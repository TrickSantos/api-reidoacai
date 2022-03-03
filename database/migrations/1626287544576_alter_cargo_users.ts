import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.integer('cargo_id').unsigned().references('cargos.id')
      table.dropColumn('perfil')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('cargo_id')
      table.enum('perfil', ['administrador', 'caixa']).defaultTo('caixa')
    })
  }
}
