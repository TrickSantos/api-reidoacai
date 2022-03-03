import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'
import View from '@ioc:Adonis/Core/View'
import Users from 'App/Models/Users'
import mjml from 'mjml'

export default class RecuperarSenha extends BaseMailer {
  constructor(private usuario: Users, private token: string) {
    super()
  }

  public async prepare(message: MessageContract) {
    const html = mjml(
      await View.render('emails/recupera_senha', {
        nome: this.usuario.nome,
        url: `${Env.get('FRONT_END_URL')}/recuperar/${this.token}`,
      })
    ).html

    message
      .subject('Recuperação de senha - Meu Controle')
      .from('noreply@meucontrole.net.br')
      .to(this.usuario.email)
      .html(html)
  }
}
