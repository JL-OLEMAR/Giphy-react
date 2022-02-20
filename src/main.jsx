import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@emotion/react'

import { App } from './App.jsx'
import { theme } from './styles'
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
