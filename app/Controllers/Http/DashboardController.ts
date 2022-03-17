import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movimentacao from 'App/Models/Movimentacao'

export default class DashboardController {
  public async index({ response, auth: { user } }: HttpContextContract) {
    try {
      await Movimentacao.query().where({ empresa_id: user?.empresaId }).groupBy([])
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }
}
