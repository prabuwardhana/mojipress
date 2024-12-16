import { Head } from '@inertiajs/react'

const SitePage = (props: { slug: string; pathname: string }) => {
  return (
    <>
      <Head title={props.slug} />
      <h2 className="text-2xl">Site Page for slug: {props.slug}</h2>
      <p>{props.pathname}</p>
    </>
  )
}

export default SitePage
