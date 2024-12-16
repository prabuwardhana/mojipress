import { Head } from '@inertiajs/react'
import SiteLayout from '~/layout/site'

const SitePage = (props: { slug: string; pathname: string }) => {
  return (
    <>
      <Head title={props.slug} />
      <SiteLayout>
        <h2 className="xt-2xl">Site Page for slug: {props.slug}</h2>
        <p>{props.pathname}</p>
      </SiteLayout>
    </>
  )
}

export default SitePage
