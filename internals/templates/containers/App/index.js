/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MoviesPage from 'containers/MoviesPage/Loadable'

import GlobalStyle from '../../global-styles'

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MoviesPage} />
      </Switch>
      <GlobalStyle />
    </div>
  )
}
