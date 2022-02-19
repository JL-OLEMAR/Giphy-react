import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

import { useSingleGif } from '../../hooks/useSingleGif'
import { Gif } from '../../components/Gif'
import { Spinner } from '../../components/Spinner'

export function Detail ({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''

  isLoading && (
    <>
      {/* <Helmet>
        <title>Loading...</title>
      </Helmet> */}
      <Spinner />
    </>
  )

  isError && <Redirect to='/404' />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{title} || Giphy</title>
      </Helmet>
      <h3 className='app-title'>{gif.title}</h3>
      <Gif {...gif} />
    </>
  )
}
