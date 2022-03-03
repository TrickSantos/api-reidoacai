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
import Servico from './Servico'
import Cliente from './Cliente'
import OrdemPagamento from './OrdemPagamento'

export default class OrdemServico extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'clienteId' })
  public clienteId: number

  @column({ serializeAs: null })
  public empresaId: number

  @column()
  public tipo: string

  @column()
  public etiqueta: string

  @column({ serializeAs: 'produtoAnalise' })
  public produtoAnalise: string

  @column()
  public observacoes: string

  @column()
  public problema: string

  @column()
  public solucao: string

  @column()
  public status: string

  @column()
  public valor: number

  @column()
  public garantia: number

  @column.dateTime()
  public entrega: DateTime

  @manyToMany(() => Servico, {
    localKey: 'id',
    pivotTable: 'os_servicos',
    relatedKey: 'id',
    pivotForeignKey: 'ordem_servico_id',
    pivotRelatedForeignKey: 'servico_id',
    pivotColumns: ['quantidade', 'desconto'],
    pivotTimestamps: true,
  })
  public servicos: ManyToMany<typeof Servico>

  @hasMany(() => OrdemPagamento)
  public pagamento: HasMany<typeof OrdemPagamento>

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
