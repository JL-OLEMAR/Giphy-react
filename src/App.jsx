import React, { Suspense } from 'react'
import { Link, Route, Switch } from 'wouter'

import { GifsContextProvider } from './context/GifsContext'
import { SearchResults } from './pages/SearchResults'
import { Detail } from './pages/Detail'
import { ErrorPage } from './pages/ErrorPage'
import './App.css'

// Lazily load Home
const Home = React.lazy(() => import('./pages/Home'))

export function App () {
  return (
    <div className='app'>
      <Suspense fallback={null}>
        <section className='app-content'>
          <Link to='/'>
            <figure className='app-logo'>
              <img src='/logo.png' alt='Giffy logo' />
            </figure>
          </Link>

          <GifsContextProvider>
            <Switch>
              <Route component={Home} path='/' />
              <Route component={Detail} path='/gif/:id' />
              <Route
                component={SearchResults}
                path='/search/:keyword/:rating?'
              />
              <Route component={ErrorPage} path='/:rest*' />
            </Switch>
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  )
}
