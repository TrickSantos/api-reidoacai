import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Users from './Users'
import Cliente from './Cliente'
import Cargo from './Cargo'

export default class Empresa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'razaoSocial' })
  public razaoSocial: string

  @column({ serializeAs: 'nomeFantasia' })
  public nomeFantasia: string

  @column({ serializeAs: 'cnpjCpf' })
  public cnpjCpf: string

  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public endereco: string

  @column()
  public plano: string

  @column()
  public status: boolean

  @hasMany(() => Users)
  public users: HasMany<typeof Users>

  @hasMany(() => Cliente)
  public clientes: HasMany<typeof Cliente>

  @hasMany(() => Cargo)
  public cargos: HasMany<typeof Cargo>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
