import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cidade from 'App/Models/Cidade'

export default class Uf extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uf: string

  @column()
  public nome: string

  @hasMany(() => Cidade)
  public cidades: HasMany<typeof Cidade>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
