/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')
const PagesController = () => import('#controllers/pages_controller')
const PostsController = () => import('#controllers/posts_controller')
const AdminHomeController = () => import('#controllers/admin/home_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/', [AdminHomeController, 'index'])
  })
  .prefix('/admin')

router
  .group(() => {
    router.get('/', [PostsController, 'index'])
    router.get('/:slug', [PostsController, 'show']).where('slug', router.matchers.slug())
  })
  .prefix('/blog')

router.get('/', [HomeController, 'index'])
router.get('/:slug', [PagesController, 'index']).where('slug', router.matchers.slug())
