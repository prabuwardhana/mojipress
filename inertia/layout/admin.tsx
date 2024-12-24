import { ReactNode, useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

import { useMediaQuery } from '@uidotdev/usehooks'

import { Sidebar } from '~/components/layout/sidebar'
import { Header } from '~/components/layout/header'

import { cn } from '~/lib/utils'
import { Toaster } from '~/components/ui/toaster'

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const isDesktopDevice = useMediaQuery('(min-width: 768px)')
  const [collapsed, setCollapsed] = useState(!isDesktopDevice)

  /** TODO: Add functionality to close the sidebar when it's clicked outside */

  const containerVariants = {
    close: {
      marginLeft: isDesktopDevice ? '60px' : '0px',
      transition: {
        type: 'spring',
        damping: 15,
        duration: 0.3,
      },
    },
    open: {
      marginLeft: '240px',
      transition: {
        type: 'spring',
        damping: 15,
        duration: 0.3,
      },
    },
  }

  const containerControls = useAnimationControls()

  useEffect(() => {
    setCollapsed(!isDesktopDevice)
  }, [isDesktopDevice])

  useEffect(() => {
    if (isDesktopDevice && !collapsed) {
      containerControls.start('open')
    } else {
      containerControls.start('close')
    }
  }, [isDesktopDevice, collapsed, containerControls])

  return (
    <div className="min-h-screen bg-secondary">
      {/* The sidebar's opaque background in mobile view */}
      <div
        className={cn(
          'pointer-events-none fixed inset-0 -z-10 bg-foreground opacity-0 transition-opacity duration-1000 ease-in-out',
          !collapsed && 'max-md:pointer-events-auto max-md:z-50 max-md:opacity-30'
        )}
      />
      <Sidebar collapsed={collapsed} isDesktopDevice={isDesktopDevice} />
      <motion.div variants={containerVariants} animate={containerControls} initial="close">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">{children}</div>
      </motion.div>
      <Toaster />
    </div>
  )
}

export default AdminLayout
