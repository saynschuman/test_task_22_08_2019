const apiKey = '49410dab71be5ee3baf48570a1364d26'
const apiPath = 'https://api.themoviedb.org/3/'
// const en = 'en-US'
const ru = 'ru-RU'

export const genres = `${apiPath}genre/movie/list?api_key=${apiKey}&language=${ru}`
export const imageUrl = 'https://image.tmdb.org/t/p/original'

export const getSearchUrl = query =>
  `${apiPath}search/movie?api_key=${apiKey}&query=${query}&include_adult=false`

export const getMoreUrl = (query, page) =>
  `${apiPath}search/movie?api_key=${apiKey}&query=${query}&page=${page}&include_adult=false`

export const getMovie = id => `${apiPath}movie/${id}?api_key=${apiKey}`

// export const popularMovies = `${apiPath}movie/popular?api_key=${apiKey}&language=${ru}`
// export const topRatedMovies = `${apiPath}movie/top_rated?api_key=${apiKey}&language=${ru}`
