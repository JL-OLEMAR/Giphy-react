import React, { Suspense } from 'react'
import { Link, Route, Switch } from 'wouter'

import { GifsContextProvider } from './context/GifsContext'
import { Detail } from './pages/Detail'
import { SearchResults } from './pages/SearchResults'
import { ErrorPage } from './pages/ErrorPage'
import './App.css'

import { Home as HomePage } from './pages/Home'
// const HomePage = React.lazy(() => import('./pages/Home'))

export function App () {
  return (
    <div className='app'>
      <Suspense fallback={null}>
        <section className='app-content'>
          <Link to='/'>
            <figure className='app-logo'>
              <img src='/logo.png' alt='Giphy logo' />
            </figure>
          </Link>

          <GifsContextProvider>
            <Switch>
              <Route component={HomePage} path='/' />
              <Route
                component={SearchResults}
                path='/search/:keyword/:rating?'
              />
              <Route component={Detail} path='/gif/:id' />
              <Route component={ErrorPage} path='/:rest*' />
            </Switch>
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  )
}
