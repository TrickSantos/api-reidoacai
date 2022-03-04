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
import Adicional from './Adicional'
import Cliente from './Cliente'
import PedidoPagamento from './PedidoPagamento'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'clienteId' })
  public clienteId: number

  @column({ serializeAs: null })
  public empresaId: number

  @column()
  public observacoes: string

  @column()
  public status: string

  @column()
  public valor: number

  @column.dateTime()
  public entrega: DateTime

  @manyToMany(() => Adicional, {
    localKey: 'id',
    pivotTable: 'pedido_adicionais',
    relatedKey: 'id',
    pivotForeignKey: 'pedido_id',
    pivotRelatedForeignKey: 'adicional_id',
    pivotColumns: ['quantidade', 'desconto'],
    pivotTimestamps: true,
  })
  public adicionais: ManyToMany<typeof Adicional>

  @hasMany(() => PedidoPagamento)
  public pagamento: HasMany<typeof PedidoPagamento>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
