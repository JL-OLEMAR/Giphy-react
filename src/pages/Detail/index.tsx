import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

import { useSingleGif } from '../../hooks/useSingleGif'
import { Gif } from '../../components/Gif'
import { Spinner } from '../../components/Spinner'

export function Detail ({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  const { id, url, title } = gif

  isLoading && <Spinner />
  isError && <Redirect to='/404' />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{title ?? 'Gif'} || Giffy</title>
      </Helmet>

      <h3 className='app-title'>{title}</h3>
      <Gif id={id} url={url} title={title} />
    </>
  )
}
