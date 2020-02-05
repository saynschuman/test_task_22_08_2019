import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as selectors from 'containers/App/selectors'
import { key } from 'containers/App//constants'
import * as actions from 'containers/App//actions'
import Wrapper from './components/Wrapper'
import List from './components/RenderList'

class Page extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const {
      query,
      currentPage,
      makeSelectTotalPages,
      moreLoading,
      moreRequestProp,
    } = this.props
    if (window.scrollY + 625 === document.body.scrollHeight) {
      const payload = {
        query,
        page: currentPage + 1,
      }
      if (makeSelectTotalPages > currentPage && !moreLoading) {
        moreRequestProp(payload)
      }
    }
  }

  render() {
    const { loading, data, moreLoading } = this.props

    const ListProps = {
      loading,
      data,
      moreLoading,
    }

    return (
      <div>
        <Wrapper>
          <article>
            <Helmet>
              <title>{key}</title>
            </Helmet>
            <List {...ListProps} title="title" movie />
          </article>
        </Wrapper>
      </div>
    )
  }
}

Page.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  moreRequestProp: PropTypes.func,
  currentPage: PropTypes.number,
  query: PropTypes.string,
  moreLoading: PropTypes.bool,
  makeSelectTotalPages: PropTypes.number,
}

const mapStateToProps = createStructuredSelector({
  loading: selectors.makeSelectLoading(),
  data: selectors.makeSelectData(),
  currentPage: selectors.makeSelectCurrentPage(),
  query: selectors.makeSelectQuery(),
  moreLoading: selectors.makeSelectMoreLoading(),
  makeSelectTotalPages: selectors.makeSelectTotalPages(),
})

const mapDispatchToProps = dispatch => ({
  moreRequestProp: data => dispatch(actions.moreMoviesRequest(data)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(Page)
