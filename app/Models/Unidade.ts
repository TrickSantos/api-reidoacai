import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Unidade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column()
  public unidade: string

  @column()
  public nomenclatura: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
