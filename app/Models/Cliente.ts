import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cidade from './Cidade'
import Receber from './Receber'

type Endereco = {
  bairro: string
  logradouro: string
  numero: string
  complemento?: string
  cep: string
}

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column({ serializeAs: 'cidadeId' })
  public cidadeId: number

  @column({ serializeAs: 'cnpjCpf' })
  public cnpjCpf: string

  @column({ serializeAs: 'razaoSocial' })
  public razaoSocial: string

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public endereco: Endereco | string

  @belongsTo(() => Cidade)
  public cidade: BelongsTo<typeof Cidade>

  @hasMany(() => Receber)
  public aReceber: HasMany<typeof Receber>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
