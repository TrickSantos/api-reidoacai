import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Pagar from './Pagar'

export default class Fornecedor extends BaseModel {
  public static table = 'fornecedores'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column()
  public nome: string

  @column({ serializeAs: 'razaoSocial' })
  public razaoSocial: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Pagar)
  public pagar: HasMany<typeof Pagar>
}
