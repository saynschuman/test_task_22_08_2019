import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { imageUrl } from 'api'
import prettyPrice from 'utils/functions/prettyPrice'

import Img from 'components/Img'
import H1 from 'components/H1'

const Wrapper = styled.div`
  display: block;
  .image {
    width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
      margin: 4px 0;
    }
  }
`

const Movie = ({ movie }) =>
  !!movie && (
    <Wrapper>
      <H1>{movie.title}</H1>
      {!!movie.poster_path && (
        <Img
          src={imageUrl + movie.poster_path}
          alt={movie.title}
          className="image"
        />
      )}
      <ul>
        {!!movie.budget && (
          <li>
            <b>Бюджет фильма: </b> {prettyPrice(movie.budget)}$
          </li>
        )}
        {!!movie.release_date && (
          <li>
            <b>Дата релиза: </b> {movie.release_date}
          </li>
        )}
        {!!movie.popularity && (
          <li>
            <b>Рейтинг: </b> {movie.popularity}
          </li>
        )}
        {!!movie.genres.length && (
          <li>
            <b>Жанры: </b>{' '}
            {movie.genres.map((el, index) => {
              const isLast = index === movie.genres.length - 1
              return (
                <span key={el.id}>
                  {el.name}
                  {!isLast && ','}{' '}
                </span>
              )
            })}
          </li>
        )}
        {!!movie.runtime && (
          <li>
            <b>Длительность: </b> {movie.runtime} мин.
          </li>
        )}
        {!!movie.tagline && (
          <li>
            <b>Слоган: </b> {movie.tagline}
          </li>
        )}
        {!!movie.overview && (
          <li>
            <b>Описание: </b> {movie.overview}
          </li>
        )}
        {!!movie.original_language && (
          <li>
            <b>Язык оригинала: </b> {movie.original_language}
          </li>
        )}
      </ul>
    </Wrapper>
  )

Movie.propTypes = {
  movie: PropTypes.object,
}

export default Movie
