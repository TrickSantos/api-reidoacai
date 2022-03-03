import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OrdemPagamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'ordemServicoId' })
  public ordemServicoId: number

  @column({ serializeAs: 'formaPagamento' })
  public formaPagamento: string

  @column()
  public parcelas: number

  @column()
  public valor: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
