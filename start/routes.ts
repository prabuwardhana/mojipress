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
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index'])
router.get('/:slug', [PagesController, 'index']).where('slug', router.matchers.slug())
