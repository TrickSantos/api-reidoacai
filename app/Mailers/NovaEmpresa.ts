import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import View from '@ioc:Adonis/Core/View'
import Empresa from 'App/Models/Empresa'
import Env from '@ioc:Adonis/Core/Env'
import mjml from 'mjml'

export default class NovaEmpresa extends BaseMailer {
  constructor(private empresa: Empresa) {
    super()
  }

  public async prepare(message: MessageContract) {
    const html = mjml(
      await View.render('emails/nova_empresa', {
        nome: this.empresa.nomeFantasia,
        url: Env.get('FRONT_END_URL'),
      })
    ).html

    message
      .subject('Bem vindo ao Meu Controle')
      .from('noreply@meucontrole.net.br')
      .to(this.empresa.email)
      .html(html)
  }
}
