import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pedido from './Pedido'
import Adicional from './Adicional'

export default class PedidoAdicional extends BaseModel {
  public static table = 'pedido_adicionais'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'pedidoId' })
  public pedidoId: number

  @column({ serializeAs: 'adicionalId' })
  public adicionalId: number

  @column()
  public quantidade: number

  @column()
  public desconto: number

  @belongsTo(() => Pedido)
  public pedido: BelongsTo<typeof Pedido>

  @belongsTo(() => Adicional)
  public adicional: BelongsTo<typeof Adicional>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
