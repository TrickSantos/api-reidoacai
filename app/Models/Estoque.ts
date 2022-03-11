import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Users from './Users'

export default class Estoque extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column({ serializeAs: 'produtoId' })
  public produtoId: number

  @column()
  public quantidade: number

  @column()
  public tipo: 'entrada' | 'saida'

  @column({ serializeAs: 'criadoPor' })
  public createdBy: number

  @belongsTo(() => Users)
  public criador: BelongsTo<typeof Users>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
