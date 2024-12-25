import PageTitle from '~/components/admin/common/page_title'
import AdminLayout from '~/layout/admin'

interface PostCreateOrEditPageProps {
  id?: string
}

const AdminCreateEditPostPage = ({ id }: PostCreateOrEditPageProps) => {
  const title = id ? 'Edit Post' : 'Add New Post'
  return <PageTitle>{title}</PageTitle>
}

// Persistent layout
AdminCreateEditPostPage.layout = (page: any) => <AdminLayout children={page} />

export default AdminCreateEditPostPage
