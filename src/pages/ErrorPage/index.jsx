import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'

import { SearchForm } from '../../components/SearchForm'
import { ButtonComponent } from '../../components/Button'

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I']

const pageErrorStyles = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`

const codeErrorStyles = css`
  font-size: 5rem;
  font-style: italic;
  font-weight: bold;
`

const msgErrorStyles = css`
  font-size: 1.5rem;
  margin: 1rem auto;
`

const SIZE = '350px'

const gifErrorStyles = css({
  height: SIZE,
  margin: '1rem auto',
  objectFit: 'cover',
  width: SIZE
})

export function ErrorPage () {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404 | Giphy</title>
      </Helmet>

      <header className='o-header'>
        <SearchForm />
      </header>

      <div className='app-wrapper'>
        <div css={pageErrorStyles}>
          <span css={codeErrorStyles}>404</span>
          <span css={msgErrorStyles}>Sometimes gettings lost isn't that bad</span>
          <img css={gifErrorStyles} src={randomImage} alt='alt-page-404' />
          <ButtonComponent href='/'>Go back home</ButtonComponent>
        </div>
      </div>
    </>
  )
}
