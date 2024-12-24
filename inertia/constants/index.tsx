import {
  Home,
  Settings,
  Users,
  LucideIcon,
  LetterText,
  Shapes,
  NotebookText,
  HelpCircle,
} from 'lucide-react'

export type SideNavItem = {
  title: string
  path: string
  icon?: LucideIcon
  submenu?: boolean
  subMenuItems?: SideNavItem[]
}

export const SIDENAV_ITEMS = [
  {
    title: 'Home',
    path: '/admin',
    icon: Home,
  },
  {
    title: 'Posts',
    path: '/admin/posts',
    icon: LetterText,
    submenu: true,
    subMenuItems: [
      { title: 'All Post', path: '/admin/posts' },
      { title: 'Add New Post', path: '/admin/posts/create' },
    ],
  },
  {
    title: 'Categories',
    path: '/admin/categories',
    icon: Shapes,
    submenu: true,
    subMenuItems: [
      { title: 'All Categories', path: '/admin/categories' },
      { title: 'Add New Category', path: '/admin/categories/create' },
    ],
  },
  {
    title: 'Pages',
    path: '/admin/pages',
    icon: NotebookText,
    submenu: true,
    subMenuItems: [
      { title: 'All Pages', path: '/admin/pages' },
      { title: 'Add New Page', path: '/admin/pages/create' },
    ],
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: Users,
    submenu: true,
    subMenuItems: [
      { title: 'All Users', path: '/admin/users' },
      { title: 'Add New User', path: '/admin/users/create' },
    ],
  },
  {
    title: 'Settings',
    path: '/admin/settings',
    icon: Settings,
  },
  {
    title: 'Help',
    path: '/admin/help',
    icon: HelpCircle,
  },
]
