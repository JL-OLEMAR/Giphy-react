import { useEffect, useState } from 'react'
import { getTrendingTerms } from '../../services/getTrendingTerms'
import { Category } from '../Category'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    const controller = new window.AbortController()
    getTrendingTerms({ signal: controller.signal })
      .then(setTrends)
      .catch(err => console.log(err))

    return () => controller.abort()
  }, [])

  return <Category name='Tendencias' options={trends} />
}
