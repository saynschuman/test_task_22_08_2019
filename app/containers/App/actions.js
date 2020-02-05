import * as constants from './constants'

export const dataRequest = query => ({
  type: constants.REQUEST,
  query,
})

export const dataResponse = data => ({
  type: constants.RESPONSE,
  data,
})

export const dataError = () => ({
  type: constants.ERROR,
})

export const genresRequest = () => ({
  type: constants.REQUEST + constants.GENRES,
})

export const genresResponse = genres => ({
  type: constants.RESPONSE + constants.GENRES,
  genres,
})

export const genresError = () => ({
  type: constants.ERROR + constants.GENRES,
})

export const setYear = year => ({
  type: constants.SET_YEAR,
  year,
})

export const setGenre = data => ({
  type: constants.SET_GENRE,
  data,
})

export const setRaiting = value => ({
  type: constants.SET_RAITING,
  value,
})

export const movieRequest = id => ({
  type: constants.REQUEST + constants.MOVIE,
  id,
})

export const movieResponse = movie => ({
  type: constants.RESPONSE + constants.MOVIE,
  movie,
})

export const movieError = () => ({
  type: constants.ERROR + constants.MOVIE,
})

export const moreMoviesRequest = data => ({
  type: constants.REQUEST + constants.MORE,
  data,
})

export const moreMoviesRespnse = movies => ({
  type: constants.RESPONSE + constants.MORE,
  movies,
})

export const moreMoviesError = () => ({
  type: constants.ERROR + constants.MORE,
})

export const setQuery = value => ({
  type: constants.SET_QUERY,
  value,
})

export const resetFilters = () => ({
  type: constants.RESET_FILTERS,
})
