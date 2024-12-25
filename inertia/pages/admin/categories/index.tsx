import PageTitle from '~/components/admin/common/page_title'
import AdminLayout from '~/layout/admin'

const AdminCategoriesPage = () => {
  return <PageTitle>All Categories</PageTitle>
}

// Persistent layout
AdminCategoriesPage.layout = (page: any) => <AdminLayout children={page} />

export default AdminCategoriesPage
