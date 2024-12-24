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
    path: '/',
    icon: Home,
  },
  {
    title: 'Posts',
    path: 'posts',
    icon: LetterText,
    submenu: true,
    subMenuItems: [
      { title: 'All Post', path: 'posts' },
      { title: 'Add New Post', path: 'posts/create' },
    ],
  },
  {
    title: 'Categories',
    path: 'categories',
    icon: Shapes,
    submenu: true,
    subMenuItems: [
      { title: 'All Categories', path: 'categories' },
      { title: 'Add New Category', path: 'categories/create' },
    ],
  },
  {
    title: 'Pages',
    path: 'pages',
    icon: NotebookText,
    submenu: true,
    subMenuItems: [
      { title: 'All Pages', path: 'pages' },
      { title: 'Add New Page', path: 'pages/create' },
    ],
  },
  {
    title: 'Users',
    path: 'users',
    icon: Users,
    submenu: true,
    subMenuItems: [
      { title: 'All Users', path: 'users' },
      { title: 'Add New User', path: 'users/create' },
      { title: 'Profile', path: 'users/profile' },
    ],
  },
  {
    title: 'Settings',
    path: 'settings',
    icon: Settings,
  },
  {
    title: 'Help',
    path: 'help',
    icon: HelpCircle,
  },
]
