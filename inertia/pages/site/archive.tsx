import { Head } from '@inertiajs/react'
import SiteLayout from '~/layout/site'

const PostsPage = () => {
  return (
    <>
      <Head title="Blog" />
      <SiteLayout>
        <h2 className="text-2xl">Posts List Page</h2>
      </SiteLayout>
    </>
  )
}

export default PostsPage
