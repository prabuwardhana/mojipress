import { Head } from '@inertiajs/react'
import SiteLayout from '~/layout/site'

const SinglePostPage = (props: { slug: string; pathname: string }) => {
  return (
    <>
      <Head title={props.slug} />
      <SiteLayout>
        <h2 className="text-2xl">Single Post Page for slug: {props.slug}</h2>
        <p>{props.pathname}</p>
      </SiteLayout>
    </>
  )
}

export default SinglePostPage
