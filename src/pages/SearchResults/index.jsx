import { useCallback, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import debounce from 'just-debounce-it'

import { useGifs } from '../../hooks/useGifs'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Spinner } from '../../components/Spinner'
import { ListOfGifs } from '../../components/ListOfGifs'
import { SearchForm } from '../../components/SearchForm'

export function SearchResults ({ params }) {
  const externalRef = useRef()
  const { keyword, rating } = params
  const { isLoading, gifs, setPage } = useGifs({ keyword, rating })

  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(() => {
    isNearScreen && debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      {isLoading
        ? <Spinner />
        : (
          <>
            <Helmet>
              <title>{title}</title>
              <meta name='description' content={title} />
              <meta name='rating' content='General' />
            </Helmet>

            <header className='o-header'>
              <SearchForm initialKeyword={keyword} initialRating={rating} />
            </header>

            <div className='app-wrapper'>
              <h3 className='app-title'>
                {decodeURI(keyword)}
              </h3>
              <ListOfGifs gifs={gifs} />
              <div id='visor' ref={externalRef} />
            </div>
          </>
          )}

    </>
  )
}
