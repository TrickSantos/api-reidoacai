import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Fornecedor from './Fornecedor'
import PagarParcelado from './PagarParcelado'
import Users from './Users'

export default class Pagar extends BaseModel {
  public static table = 'pagar'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column({ serializeAs: 'fornecedorId' })
  public fornecedorId: number

  @column()
  public valor: number

  @column()
  public status: 'pago' | 'aguardando' | 'vencido'

  @hasMany(() => PagarParcelado)
  public parcelas: HasMany<typeof PagarParcelado>

  @belongsTo(() => Fornecedor)
  public fornecedor: BelongsTo<typeof Fornecedor>

  @column.dateTime({ autoCreate: true, serializeAs: 'data' })
  public createdAt: DateTime

  @column({ serializeAs: 'criadoPor' })
  public createdBy: number

  @belongsTo(() => Users)
  public criador: BelongsTo<typeof Users>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
