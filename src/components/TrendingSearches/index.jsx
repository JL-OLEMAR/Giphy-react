import React, { Suspense } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Spinner } from '../Spinner'

// Lazily load TrendingSearches
const TrendingSearches = React.lazy(() => import('./TrendingSearches.jsx'))

export default function LazyTrending () {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '0px' })

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  )
}
