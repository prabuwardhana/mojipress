import { ReactNode } from 'react'

const FrontpageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full">{children}</div>
    </>
  )
}

export default FrontpageLayout
