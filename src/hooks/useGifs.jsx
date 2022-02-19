import { useContext, useEffect, useState } from 'react'
import { GifsContext } from '../context/GifsContext'
import { getGifs } from '../services/getGifs'

const INITIAL_PAGE = 0

export function useGifs ({ keyword, rating } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [isLoading, setIsLoading] = useState(false)
  const [isloadingNextPage, setIsLoadingNextPage] = useState(false)

  // Recupera la keyword del localStorage
  const keywordToUse = keyword || window.localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setIsLoading(true)

    getGifs({ keyword: keywordToUse, rating })
      .then(gifs => {
        setGifs(gifs)
        setIsLoading(false)

        // Guarda la keyword en el localStorage
        window.localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, keywordToUse, rating, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setIsLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, page, rating })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setIsLoadingNextPage(false)
      })
  }, [keywordToUse, page, rating, setGifs])

  return {
    isLoading,
    isloadingNextPage,
    gifs,
    setPage
  }
}
