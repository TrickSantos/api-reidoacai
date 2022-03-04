import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Empresa from 'App/Models/Empresa'

const base = {
  criar: true,
  visualizar: true,
  atualizar: true,
  apagar: true,
}

export default class DevelopmentSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await Empresa.create({
      cnpjCpf: '000000000000000',
      razaoSocial: 'Rei do Açai',
      nomeFantasia: 'Rei do Açai',
      email: 'reidoacai@email.com',
      telefone: '0000000000000',
      status: true,
      plano: 'Admin',
    }).then(async (empresa) => {
      await empresa.related('clientes').create({
        nome: 'Consumidor Final',
        telefone: '65999999999',
      })
      await empresa
        .related('cargos')
        .create({
          nome: 'Super Admin',
          aPagar: base,
          aReceber: base,
          caixa: base,
          empresas: base,
          usuarios: base,
          cargos: base,
          clientes: base,
          pedidos: base,
          fornecedores: base,
          adicionais: base,
          unidades: base,
        })
        .then(async (cargo) => {
          await cargo.related('users').create({
            empresaId: empresa.id,
            nome: 'Patrick Adan',
            email: 'patrick.tafa@gmail.com',
            cpf: '11111111111',
            password: 'secret',
          })
        })
    })
  }
}
