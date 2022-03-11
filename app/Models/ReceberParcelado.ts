import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Receber from './Receber'
import Users from './Users'

export default class ReceberParcelado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'receberId' })
  public receberId: number

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

  @belongsTo(() => Receber)
  public receber: BelongsTo<typeof Receber>

  @column({ serializeAs: 'criadoPor' })
  public createdBy: number

  @belongsTo(() => Users)
  public criador: BelongsTo<typeof Users>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column({ serializeAs: 'atualizadoPor' })
  public updatedBy: number

  @belongsTo(() => Users)
  public atualizador: BelongsTo<typeof Users>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
