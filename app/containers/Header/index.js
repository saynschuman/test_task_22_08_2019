import React, { memo, useState, useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import * as selectors from 'containers/App/selectors'
import { key } from 'containers/App/constants'
import reducer from 'containers/App/reducer'
import saga from 'containers/App/saga'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import Select from 'components/Select'
import List from 'containers/MoviesPage/components/RenderList'
import Raiting from 'components/Raiting'
import Button from 'components/Button'
import A from 'components/A'
import * as actions from 'containers/App/actions'
import Wrapper from './Wrapper'

const Header = ({
  genresLoading,
  genres,
  dataRequestProp,
  genresRequestProp,
  setYearProp,
  setRaitingProp,
  setGenreProp,
  selectedGenres,
  selectedRaiting,
  isFPW,
  setQueryProp,
  query,
  resetFiltersProp,
  selectedYear,
}) => {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })
  const [form, setState] = useState({
    mFVisible: false,
  })

  useEffect(() => {
    genresRequestProp()
  }, [])

  const onChange = e => {
    setQueryProp(e.target.value)
  }

  const handleStar = value => {
    setRaitingProp(value)
  }

  const onChangeYear = e => {
    setYearProp(Number.parseInt(e.target.value, 10))
  }

  const setGenre = (id, isChecked) => {
    const data = { id, isChecked }
    setGenreProp(data)
  }

  const onSubmit = e => {
    e.preventDefault()
    if (!query.length) return
    dataRequestProp(query)
  }

  const resetFilters = e => {
    e.preventDefault()
    resetFiltersProp()
  }

  return (
    <Wrapper
      isFPW={isFPW}
      mFVisible={form.mFVisible}
      selectedRaiting={selectedRaiting}
    >
      <div className="search-block">
        <form onSubmit={onSubmit} className="form">
          <input
            name="query"
            onChange={onChange}
            type="search"
            value={query}
            id="movie"
            placeholder="Поиск фильма"
          />
        </form>
        <Select selectedYear={selectedYear} onChangeYear={onChangeYear} />
        <Raiting
          onClick={handleStar}
          start={1}
          end={6}
          selectedRaiting={selectedRaiting}
          className="rating"
          valueClassName="raiting-number"
        />
        <A onClick={resetFilters} href="/" className="reset-filters">
          сбросить фильтры
        </A>
        <Button
          onClick={() =>
            setState({
              ...form,
              mFVisible: !form.mFVisible,
            })
          }
          className="show-filters"
          text={!form.mFVisible ? 'Показать жанры' : 'Скырть жанры'}
        />
      </div>
      <div className="list">
        <List
          loading={genresLoading}
          data={genres}
          title="name"
          checkbox
          checkedGenres={selectedGenres}
          onChange={setGenre}
        />
      </div>
    </Wrapper>
  )
}

Header.propTypes = {
  genresLoading: PropTypes.bool,
  genres: PropTypes.array,
  dataRequestProp: PropTypes.func,
  genresRequestProp: PropTypes.func,
  setYearProp: PropTypes.func,
  setGenreProp: PropTypes.func,
  setRaitingProp: PropTypes.func,
  selectedGenres: PropTypes.array,
  selectedRaiting: PropTypes.number,
  isFPW: PropTypes.bool,
  setQueryProp: PropTypes.func,
  query: PropTypes.string,
  resetFiltersProp: PropTypes.func,
  selectedYear: PropTypes.number,
}

const mapStateToProps = createStructuredSelector({
  genresLoading: selectors.makeSelectGenresLoading(),
  genres: selectors.makeSelectGenres(),
  selectedGenres: selectors.makeSelectSelectedGenres(),
  selectedRaiting: selectors.makeSelectSelectedRaiting(),
  selectedYear: selectors.makeSelectSelectedYear(),
  query: selectors.makeSelectQuery(),
})

const mapDispatchToProps = dispatch => ({
  dataRequestProp: query => dispatch(actions.dataRequest(query)),
  genresRequestProp: () => dispatch(actions.genresRequest()),
  setYearProp: year => dispatch(actions.setYear(year)),
  setGenreProp: data => dispatch(actions.setGenre(data)),
  setRaitingProp: value => dispatch(actions.setRaiting(value)),
  setQueryProp: value => dispatch(actions.setQuery(value)),
  resetFiltersProp: () => dispatch(actions.resetFilters()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(Header)
