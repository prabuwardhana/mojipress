import { Head } from '@inertiajs/react'
import FrontpageLayout from '~/layout/frontpage'

const SitePage = (props: { slug: string; pathname: string }) => {
  return (
    <>
      <Head title={props.slug} />
      <FrontpageLayout>
        <h2 className="xt-2xl">Site Page for slug: {props.slug}</h2>
        <p>{props.pathname}</p>
      </FrontpageLayout>
    </>
  )
}

export default SitePage
