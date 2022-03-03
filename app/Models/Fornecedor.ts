import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cidade from './Cidade'
import Pagar from './Pagar'

export default class Fornecedor extends BaseModel {
  public static table = 'fornecedores'

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column({ serializeAs: 'cidadeId' })
  public cidadeId: number

  @column()
  public nome: string

  @column({ serializeAs: 'razaoSocial' })
  public razaoSocial: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column({ serializeAs: 'cpfCnpj' })
  public cpfCnpj: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Cidade)
  public cidade: BelongsTo<typeof Cidade>

  @hasMany(() => Pagar)
  public pagar: HasMany<typeof Pagar>
}
