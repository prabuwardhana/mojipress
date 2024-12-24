import { Bell, ChevronsLeft } from 'lucide-react'
import { cn } from '~/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

import { Dispatch, SetStateAction } from 'react'
import { ModeToggle } from '~/components/admin/common/mode_toggle'

interface HeaderProps {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
  return (
    <header className="transition-color relative z-10 flex h-[60px] items-center justify-between bg-background px-4 shadow-md">
      <div className="flex items-center gap-x-3">
        <button className="btn-ghost size-10" onClick={() => setCollapsed(!collapsed)}>
          <ChevronsLeft className={cn(collapsed && 'rotate-180')} />
        </button>
      </div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <button className="btn-ghost size-10">
          <Bell size={18} />
        </button>
        <button className="size-10 overflow-hidden rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-black">BT</AvatarFallback>
          </Avatar>
        </button>
      </div>
    </header>
  )
}
