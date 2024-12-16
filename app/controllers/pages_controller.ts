import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async index({ inertia, params, request }: HttpContext) {
    const slug = params.slug
    const pathname = request.url()
    return inertia.render('frontpage/page', {
      slug: slug,
      pathname: pathname,
    })
  }
}
