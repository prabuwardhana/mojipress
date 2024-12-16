import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index({ inertia }: HttpContext) {
    return inertia.render('site/archive')
  }

  async show({ inertia, params, request }: HttpContext) {
    const slug = params.slug
    const pathname = request.url()
    return inertia.render('site/post', {
      slug: slug,
      pathname: pathname,
    })
  }
}
