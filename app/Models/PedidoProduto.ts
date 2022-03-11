import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Pedido from './Pedido'
import Produto from './Produto'

export default class PedidoProdutos extends BaseModel {
  public static table = 'pedido_adicionais'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'pedidoId' })
  public pedidoId: number

  @column({ serializeAs: 'produtoId' })
  public produtoId: number

  @column()
  public quantidade: number

  @column()
  public desconto: number

  @belongsTo(() => Pedido)
  public pedido: BelongsTo<typeof Pedido>

  @belongsTo(() => Produto)
  public produto: BelongsTo<typeof Produto>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
