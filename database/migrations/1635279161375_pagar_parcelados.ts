import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PagarParcelados extends BaseSchema {
  protected tableName = 'pagar_parcelados'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pagar_id').unsigned().references('pagar.id').onDelete('cascade')
      table.decimal('valor').notNullable()
      table.integer('parcela')
      table.dateTime('vencimento').notNullable()
      table.dateTime('pagamento')
      table.boolean('status')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
