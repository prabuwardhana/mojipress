import PageTitle from '~/components/admin/common/page_title'
import AdminLayout from '~/layout/admin'

interface SitePageCreateOrEditPageProps {
  id?: string
}

const AdminCreateEditSitePagePage = ({ id }: SitePageCreateOrEditPageProps) => {
  const title = id ? 'Edit Site Page' : 'Add New Site Page'
  return <PageTitle>{title}</PageTitle>
}

// Persistent layout
AdminCreateEditSitePagePage.layout = (page: any) => <AdminLayout children={page} />

export default AdminCreateEditSitePagePage
