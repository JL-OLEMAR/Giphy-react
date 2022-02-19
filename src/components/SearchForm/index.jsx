import { useLocation } from 'wouter'
import { useForm } from './hook'
import { ButtonComponent } from '../Button'
import css from './SearchForm.module.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export function SearchForm ({
  initialKeyword = '',
  initialRating = RATINGS[0]
}) {
  const [, pushLocation] = useLocation()
  const { keyword, rating, changeKeyword, changeRating } = useForm({ initialKeyword, initialRating })

  const onSubmit = ({ keyword }) => {
    // navegar a otra ruta
    (keyword !== '') && pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (evt) => {
    changeKeyword({ keyword: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit({ keyword })
  }

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css['c-search']}>
        <ButtonComponent>Buscar</ButtonComponent>

        <input
          className={css['c-search-input']}
          onChange={handleChange}
          placeholder='Search a gif here...'
          type='text'
          value={keyword}
        />

        <select
          className={css['c-search-list']}
          onChange={handleChangeRating}
          value={rating}
        >
          <option disabled>
            Rating:
          </option>
          {RATINGS.map(r => <option key={r}>{r}</option>)}
        </select>
      </form>
    </>
  )
}
