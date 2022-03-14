import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Empresa from './Empresa'
import Unidade from './Unidade'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'unidadeId' })
  public unidadeId: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column()
  public nome: string

  @column()
  public descricao: string

  @column()
  public valor: number

  @belongsTo(() => Empresa)
  public empresa: BelongsTo<typeof Empresa>

  @belongsTo(() => Unidade)
  public unidade: BelongsTo<typeof Unidade>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
