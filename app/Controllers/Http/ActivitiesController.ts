import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ActivitiesController {
  public async index({}: HttpContextContract) {
    return { name: 'enggar' }
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
