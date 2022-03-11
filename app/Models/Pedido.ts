import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'
import Cliente from './Cliente'
import PedidoPagamento from './PedidoPagamento'
import Users from './Users'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'clienteId' })
  public clienteId: number

  @column({ serializeAs: null })
  public empresaId: number

  @column({ serializeAs: 'criadoPor' })
  public createdBy: number

  @column()
  public observacoes: string

  @column()
  public status: string

  @column()
  public valor: number

  @column.dateTime()
  public entrega: DateTime

  @manyToMany(() => Produto, {
    localKey: 'id',
    pivotTable: 'pedido_produtos',
    relatedKey: 'id',
    pivotForeignKey: 'pedido_id',
    pivotRelatedForeignKey: 'produto_id',
    pivotColumns: ['quantidade', 'desconto'],
    pivotTimestamps: true,
  })
  public produtos: ManyToMany<typeof Produto>

  @hasMany(() => PedidoPagamento)
  public pagamento: HasMany<typeof PedidoPagamento>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Users)
  public criador: BelongsTo<typeof Users>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
