import { Helmet } from 'react-helmet'
import { useGifs } from '../../hooks/useGifs'
import { ListOfGifs } from '../../components/ListOfGifs'
import { SearchForm } from '../../components/SearchForm'
import TrendingSearches from '../../components/TrendingSearches'

export default function Home () {
  const { gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>

      <header className='o-header'>
        <SearchForm />
      </header>

      <div className='app-wrapper'>
        <div className='app-main'>
          <div className='app-results'>
            <h3 className='app-title'>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>

          <div className='app-category'>
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  )
}
