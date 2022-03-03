import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ReceberParcelado from './ReceberParcelado'
import Cliente from './Cliente'

export default class Receber extends BaseModel {
  public static table = 'receber'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column({ serializeAs: 'clienteId' })
  public clienteId: number

  @column()
  public valor: number

  @column()
  public status: 'pago' | 'aguardando' | 'vencido'

  @hasMany(() => ReceberParcelado)
  public parcelas: HasMany<typeof ReceberParcelado>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @column.dateTime({ autoCreate: true, serializeAs: 'data' })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
