import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ReceberParcelados extends BaseSchema {
  protected tableName = 'receber_parcelados'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('receber_id').unsigned().references('receber.id').onDelete('cascade')
      table.decimal('valor').notNullable()
      table.integer('parcela')
      table.dateTime('vencimento').notNullable()
      table.dateTime('pagamento')
      table.boolean('status')
      table.timestamp('created_at', { useTz: true })
      table
        .integer('created_by')
        .unsigned()
        .references('users.id')
        .onDelete('cascade')
        .notNullable()
      table
        .integer('updated_by')
        .unsigned()
        .references('users.id')
        .onDelete('cascade')
        .notNullable()
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
