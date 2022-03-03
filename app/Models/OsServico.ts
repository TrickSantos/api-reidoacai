import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import OrdemServico from './OrdemServico'
import Servico from './Servico'

export default class OsServico extends BaseModel {
  public static table = 'os_servicos'
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'ordemServicoId' })
  public ordemServicoId: number

  @column({ serializeAs: 'servicoId' })
  public servicoId: number

  @column()
  public quantidade: number

  @column()
  public desconto: number

  @belongsTo(() => OrdemServico)
  public os: BelongsTo<typeof OrdemServico>

  @belongsTo(() => Servico)
  public servico: BelongsTo<typeof Servico>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
