import PageTitle from '~/components/admin/common/page_title'
import AdminLayout from '~/layout/admin'

const AdminPostsPage = () => {
  return <PageTitle>All Posts</PageTitle>
}

// Persistent layout
AdminPostsPage.layout = (page: any) => <AdminLayout children={page} />

export default AdminPostsPage
