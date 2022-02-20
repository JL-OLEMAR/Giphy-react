import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'

import { SearchForm } from '../../components/SearchForm'
import { ButtonComponent } from '../../components/Button'

const gifsErrors = ['d2jjuAZzDSVLZ5kI', 'Bp3dFfoqpCKFyXuSzP', 'hv5AEBpH3ZyNoRnABG', 'hLwSzlKN8Fi6I']

const PageErrorStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  text-align: center;
`

const CodeErrorStyles = styled.span`
  font-size: 5rem;
  font-style: italic;
  font-weight: bold;
`

const MsgErrorStyles = styled.span`
  font-size: 1.5rem;
  margin: 1rem auto;
`

const GifErrorStyles = styled.img`
  height: 350px;
  margin: 1rem auto;
  object-fit: cover;
  width: 350px;
`

export function ErrorPage () {
  const randomImage = () => {
    return `https://media.giphy.com/media/${gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]}/giphy.gif`
  }

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>

      <header className='o-header'>
        <SearchForm />
      </header>

      <div className='app-wrapper'>
        <PageErrorStyles>
          <CodeErrorStyles>404</CodeErrorStyles>
          <MsgErrorStyles>Sometimes gettings lost isn't that bad</MsgErrorStyles>
          <GifErrorStyles src={randomImage()} alt='alt-page-404' />
          <ButtonComponent href='/'>Go back home</ButtonComponent>
        </PageErrorStyles>
      </div>
    </>
  )
}
