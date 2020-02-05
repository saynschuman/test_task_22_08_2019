import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import * as selectors from 'containers/App/selectors'
import { compose } from 'redux'
import { intersection } from 'lodash'
import getFirstWord from 'utils/functions/getFirstWord'

const Wrapper = styled.div`
  cursor: pointer;
  background-color: #fafafa;
  padding: ${props => (props.enable ? '10px' : '0')};
  height: ${props => (props.enable ? 'auto' : '0')};
  position: ${props => (props.equalPopularity ? 'relative' : 'fixed')};
  top: ${props => (props.equalPopularity ? 'none' : '-1000px')};
  display: ${props => (!props.equalYear ? 'block' : 'none')};
  margin-bottom: ${props => (!props.enable ? '0' : '20px')};
  a {
    color: ${props => (props.enable ? '#000' : '#fafafa')};
    text-decoration: none;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`

const MovieItem = ({
  element,
  selectedGenres,
  selectedYear,
  genres,
  selectedRaiting,
}) => {
  const year = Number.parseInt(getFirstWord(element.release_date, '-'), 10)
  return (
    <Wrapper
      equalYear={!!selectedYear && selectedYear !== year}
      equalPopularity={
        !selectedRaiting || element.popularity >= selectedRaiting
      }
      enable={
        !selectedGenres.length ||
        !!intersection(selectedGenres, element.genre_ids).length
      }
    >
      <Link to={`/movie/${element.id}`}>
        <div>
          <b>Название: </b>
          {element.title ? element.title : '-'}
        </div>
        <div>
          <b>Год выхода: </b>
          {element.release_date ? getFirstWord(element.release_date, '-') : '-'}
        </div>
        <div>
          <b>Жанры: </b>
          {element.genre_ids.length ? (
            <span>
              {element.genre_ids.map((el, index) => {
                const isLast = index === element.genre_ids.length - 1
                return (
                  <span key={el}>
                    {genres.find(item => el === item.id).name}
                    {!isLast && ', '}
                  </span>
                )
              })}
            </span>
          ) : (
            '-'
          )}
        </div>
        <div>
          <b>Рейтинг: </b>
          {element.popularity}
        </div>
        <div>
          <b>Описание: </b>
          {element.overview}
        </div>
      </Link>
    </Wrapper>
  )
}

MovieItem.propTypes = {
  element: PropTypes.object,
  selectedGenres: PropTypes.array,
  selectedYear: PropTypes.number,
  genres: PropTypes.array,
  selectedRaiting: PropTypes.number,
}

const mapStateToProps = createStructuredSelector({
  selectedGenres: selectors.makeSelectSelectedGenres(),
  selectedYear: selectors.makeSelectSelectedYear(),
  genres: selectors.makeSelectGenres(),
  selectedRaiting: selectors.makeSelectSelectedRaiting(),
})

const withConnect = connect(mapStateToProps)

export default compose(
  withConnect,
  memo,
)(MovieItem)
