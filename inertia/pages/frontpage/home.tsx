import { Head } from '@inertiajs/react'
import FrontpageLayout from '~/layout/frontpage'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />

      <FrontpageLayout>
        <div className="text-5xl font-medium text-[#5a45ff]">AdonisJS x Inertia x React</div>
      </FrontpageLayout>
    </>
  )
}
