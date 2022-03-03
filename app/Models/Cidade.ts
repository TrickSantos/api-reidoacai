import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Uf from 'App/Models/Uf'

export default class Cidade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'ufId' })
  public ufId: number

  @column()
  public cidade: string

  @belongsTo(() => Uf)
  public uf: BelongsTo<typeof Uf>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
