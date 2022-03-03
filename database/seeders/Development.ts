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
        endereco: {
          bairro: '469SW',
          cep: '78000000',
          logradouro: 'Av. Rotary Internacional, 469SW, Quadra 35, Lote 06, Sala 01',
          numero: '',
          complemento: '',
        },
        cidadeId: 4929,
        cnpjCpf: '33333333333333',
        telefone: '65999999999',
      })
      await empresa
        .related('cargos')
        .create({
          nome: 'Super Admin',
          pdv: base,
          aPagar: base,
          aReceber: base,
          caixa: base,
          empresas: base,
          usuarios: base,
          cargos: base,
          clientes: base,
          compras: base,
          fornecedores: base,
          os: base,
          unidades: base,
          servicos: base,
          produtos: base,
        })
        .then(async (cargo) => {
          await cargo.related('users').create({
            empresaId: empresa.id,
            nome: 'Patrick Adan',
            email: 'patrick.tafa@gmail.com',
            cpf: '11111111111',
            password: 'secret',
            image: '',
          })
        })
    })
  }
}
