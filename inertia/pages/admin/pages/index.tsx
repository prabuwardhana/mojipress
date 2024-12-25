import PageTitle from '~/components/admin/common/page_title'
import AdminLayout from '~/layout/admin'

const AdminSitePagesPage = () => {
  return <PageTitle>All Site Pages</PageTitle>
}

// Persistent layout
AdminSitePagesPage.layout = (page: any) => <AdminLayout children={page} />

export default AdminSitePagesPage
