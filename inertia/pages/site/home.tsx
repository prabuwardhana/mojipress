import { Head } from '@inertiajs/react'
import SiteLayout from '~/layout/site'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />

      <SiteLayout>
        <div className="text-5xl font-medium text-[#5a45ff]">AdonisJS x Inertia x React</div>
      </SiteLayout>
    </>
  )
}
