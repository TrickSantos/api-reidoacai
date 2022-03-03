import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Uf from 'App/Models/Uf'

export default class UfsController {
  public async index({ response }: HttpContextContract) {
    try {
      const ufs = await Uf.query().preload('cidades')
      return response.status(200).send(ufs)
    } catch (error) {
      return response
        .status(500)
        .send({ errors: [{ message: 'Erro ao encontrar cidades, tente novamente' }] })
    }
  }
}
