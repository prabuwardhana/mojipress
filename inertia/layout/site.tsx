import { ReactNode } from 'react'

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full">{children}</div>
    </>
  )
}

export default SiteLayout
