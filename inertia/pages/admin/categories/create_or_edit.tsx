import PageTitle from '~/components/admin/common/page_title'
import AdminLayout from '~/layout/admin'

interface CategoryCreateOrEditPageProps {
  id?: string
}

const AdminCreateEditPostPage = ({ id }: CategoryCreateOrEditPageProps) => {
  const title = id ? 'Edit Category' : 'Add New Category'
  return <PageTitle>{title}</PageTitle>
}

// Persistent layout
AdminCreateEditPostPage.layout = (page: any) => <AdminLayout children={page} />

export default AdminCreateEditPostPage
