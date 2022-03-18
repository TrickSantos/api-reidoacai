import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { DateTime } from 'luxon'

export default class DashboardController {
  public async index({ response, auth: { user } }: HttpContextContract) {
    try {
      if (!user) {
        return response.status(401)
      }

      const data = await Database.rawQuery(
        "select tipo, date_trunc('month', data) as mes, sum(valor) as total " +
          'from movimentacoes where empresa_id = :empresaId group by mes, tipo order by mes desc, tipo',
        { empresaId: user.empresaId }
      )

      const res = data.rows.map((row: any) => {
        return {
          mes: DateTime.fromMillis(Date.parse(row.mes)).setLocale('pt-BR').toFormat('LLLL'),
          ano: DateTime.fromMillis(Date.parse(row.mes)).setLocale('pt-BR').toFormat('yyyy'),
          total: Number(row.total),
          tipo: row.tipo,
        }
      })

      return response.send(res)
    } catch (error) {
      if (error.messages) {
        return response.status(500).send(error.messages)
      } else {
        console.log(error)
        return response.status(500).send({ errors: [{ message: error.message }] })
      }
    }
  }
}
