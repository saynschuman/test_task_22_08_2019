/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MoviesPage from 'containers/MoviesPage/Loadable'
import Sidebar from 'containers/Sidebar'
import Header from 'containers/Header'

import GlobalStyle from 'global-styles'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import * as selectors from './selectors'
import { AppWrapper, Body, Main } from './components/styled'

const App = ({ location }) => {
  const isFullPageWidth = location.pathname.length === 1
  return (
    <>
      <Helmet titleTemplate="%s - Movie Drome" defaultTitle="Movie Drome">
        <meta name="description" content="A Movie Drome application" />
      </Helmet>
      <AppWrapper>
        <Switch>
          <Main>
            <Header isFPW={isFullPageWidth} />
            <Body isFullPageWidth={isFullPageWidth}>
              <Route path="*" component={MoviesPage} />
            </Body>
            <Route exact path="/movie/:id" component={Sidebar} />
          </Main>
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </>
  )
}

App.propTypes = {
  location: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  location: selectors.makeSelectLocation(),
})

const withConnect = connect(mapStateToProps)

export default compose(
  withConnect,
  memo,
)(App)
