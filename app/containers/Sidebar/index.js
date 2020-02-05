import React, { memo, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'

import * as actions from 'containers/App/actions'
import * as selectors from 'containers/App/selectors'

import { device } from 'ui/mediaQueries'
import getWord from 'utils/functions/getWord'

import Loader from 'components/Loader'
import Movie from 'components/Movie'

const Wrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  width: 300px;
  height: 100%;
  right: -15px;
  background-color: #fff;
  padding: 20px;
  transition: 1s;
  ${device.tablet} {
    position: fixed;
    right: -100%;
  }
`

const Sidebar = ({ getMovieProp, location, movie, loading }) => {
  useEffect(() => {
    const id = getWord(location.pathname, '/', 2)
    getMovieProp(id)
  }, [location])
  return <Wrapper>{loading ? <Loader /> : <Movie movie={movie} />}</Wrapper>
}

Sidebar.propTypes = {
  getMovieProp: PropTypes.func,
  location: PropTypes.object,
  movie: PropTypes.object,
  loading: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  location: selectors.makeSelectLocation(),
  movie: selectors.makeSelectCurrentMovie(),
  loading: selectors.makeSelectMovieLoading(),
})

const mapDispatchToProps = dispatch => ({
  getMovieProp: id => dispatch(actions.movieRequest(id)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(Sidebar)
