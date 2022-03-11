import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pagar from './Pagar'
import Users from './Users'

export default class PagarParcelado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'pagarId' })
  public pagarId: number

  @column()
  public valor: number

  @column()
  public parcela: number

  @column.dateTime()
  public vencimento: DateTime

  @column.dateTime()
  public pagamento: DateTime

  @column()
  public status: boolean

  @belongsTo(() => Pagar)
  public pagar: BelongsTo<typeof Pagar>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column({ serializeAs: 'criadoPor' })
  public createdBy: number

  @belongsTo(() => Users)
  public criador: BelongsTo<typeof Users>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column({ serializeAs: 'atualizadoPor' })
  public updatedBy: number

  @belongsTo(() => Users)
  public atualizador: BelongsTo<typeof Users>
}
