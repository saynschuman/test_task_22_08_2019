import React from 'react'
import PropTypes from 'prop-types'
import { includes } from 'lodash'
import styled from 'styled-components'

import Loader from 'components/Loader'
import MovieItem from 'containers/MoviesPage/components/MovieItem'
import CheckboxItem from 'components/CheckBoxItem'

const LoaderWrapper = styled.div`
  position: relative;
  height: 100px;
`

const List = ({
  loading,
  data,
  title,
  checkbox,
  onChange,
  checkedGenres,
  movie,
  moreLoading,
}) =>
  loading ? (
    <Loader />
  ) : (
    <>
      {data.map(el => (
        <div key={el.id}>
          {checkbox && (
            <CheckboxItem
              isChecked={includes(checkedGenres, el.id)}
              id={el.id}
              title={el[title]}
              onChange={onChange}
            />
          )}
          {movie && <MovieItem element={el} />}
        </div>
      ))}
      {movie && moreLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </>
  )

List.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  title: PropTypes.string,
  checkbox: PropTypes.bool,
  movie: PropTypes.bool,
  onChange: PropTypes.func,
  checkedGenres: PropTypes.array,
  moreLoading: PropTypes.bool,
}

export default List
