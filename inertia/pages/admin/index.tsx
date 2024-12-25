import PageTitle from '~/components/admin/common/page_title'
import AdminLayout from '~/layout/admin'

const AdminHomePage = () => {
  return <PageTitle>Dashboard Home</PageTitle>
}

// Persistent layout
AdminHomePage.layout = (page: any) => <AdminLayout children={page} />

export default AdminHomePage
