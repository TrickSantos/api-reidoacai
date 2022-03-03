import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Users from 'App/Models/Users'

interface Base {
  criar: boolean
  visualizar: boolean
  atualizar: boolean
  apagar: boolean
}

export default class Cargo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: 'empresaId' })
  public empresaId: number

  @column()
  public nome: string

  @column()
  public pdv: Base

  @column()
  public os: Base

  @column()
  public produtos: Base

  @column()
  public servicos: Base

  @column()
  public clientes: Base

  @column()
  public fornecedores: Base

  @column()
  public unidades: Base

  @column()
  public compras: Base

  @column({ serializeAs: 'aPagar' })
  public aPagar: Base

  @column({ serializeAs: 'aReceber' })
  public aReceber: Base

  @column()
  public caixa: Base

  @column()
  public empresas: Base

  @column()
  public usuarios: Base

  @column()
  public cargos: Base

  @hasMany(() => Users)
  public users: HasMany<typeof Users>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
