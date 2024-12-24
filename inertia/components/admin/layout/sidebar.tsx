import { forwardRef, useEffect } from 'react'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'

import { Rocket } from 'lucide-react'

import { SIDENAV_ITEMS } from '~/constants'
import { cn } from '~/lib/utils'

import NavItem from '~/components/admin/layout/nav_item'

interface SidebarProps {
  collapsed: boolean
  isDesktopDevice: boolean
}

const containerVariants = {
  close: {
    width: '60px',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.3,
    },
  },
  open: {
    width: '240px',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.3,
    },
  },
} as const

const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
} as const

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ collapsed, isDesktopDevice }: SidebarProps, ref) => {
    const containerControls = useAnimationControls()

    useEffect(() => {
      if (!collapsed) {
        containerControls.start('open')
      } else {
        containerControls.start('close')
      }
    }, [collapsed, containerControls])

    return (
      <motion.aside
        ref={ref}
        variants={containerVariants}
        animate={containerControls}
        initial="open"
        className={cn(
          'fixed z-[100] flex h-full flex-col overflow-x-hidden border-r border-secondary-foreground/10 bg-background',
          collapsed ? 'md:items-center' : '',
          collapsed ? 'max-md:-left-full' : 'max-md:left-0',
          !isDesktopDevice ? 'transition-[left] duration-1000 ease-in-out' : ''
        )}
      >
        <div className="flex h-[60px] w-full items-center gap-x-3 overflow-x-hidden pl-3 text-2xl font-medium text-primary">
          <Rocket size={30} className="flex-shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                key={`${collapsed}`}
                variants={opacityVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <span className="whitespace-nowrap">RocketCMS</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <nav className="flex h-full w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <NavItem key={idx} item={item} isCollapsed={collapsed} />
          })}
        </nav>
      </motion.aside>
    )
  }
)
