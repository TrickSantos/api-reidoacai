import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Empresa from './Empresa'
import Users from './Users'

export default class Movimentacao extends BaseModel {
  public static table = 'movimentacoes'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column({ serializeAs: 'criadoPor' })
  public createdBy: number

  @column()
  public descricao: string

  @column()
  public valor: number

  @column()
  public tipo: string

  @column()
  public origem: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Empresa)
  public empresa: BelongsTo<typeof Empresa>

  @belongsTo(() => Users)
  public criador: BelongsTo<typeof Users>
}
