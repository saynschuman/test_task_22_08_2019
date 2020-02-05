import produce from 'immer'
import * as constants from './constants'

export const initialState = {
  loading: false,
  moreLoading: false,
  genresLoading: false,
  data: [],
  genres: [],
  selectedGenres: [],
  selectedYear: null,
  selectedRaiting: null,
  movieLoading: false,
  currentMovie: null,
  currentPage: 1,
  total_pages: null,
  query: '',
}

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.RESET_FILTERS:
        draft.selectedGenres = []
        draft.selectedYear = null
        draft.selectedRaiting = null
        break
      case constants.SET_QUERY:
        draft.query = action.value
        break
      case constants.REQUEST:
        draft.loading = true
        break
      case constants.RESPONSE:
        draft.loading = false
        draft.data = action.data.results
        draft.total_pages = action.data.total_pages
        break
      case constants.ERROR:
        draft.loading = false
        break

      case constants.REQUEST + constants.MORE:
        draft.moreLoading = true
        break
      case constants.RESPONSE + constants.MORE:
        draft.moreLoading = false
        draft.data = draft.data.concat(action.movies.results)
        draft.total_pages = action.movies.total_pages
        draft.currentPage = state.currentPage + 1
        break
      case constants.ERROR + constants.MORE:
        draft.moreLoading = false
        break

      case constants.REQUEST + constants.MOVIE:
        draft.movieLoading = true
        break
      case constants.RESPONSE + constants.MOVIE:
        draft.movieLoading = false
        draft.currentMovie = action.movie
        break
      case constants.ERROR + constants.MOVIE:
        draft.loading = false
        break
      case constants.REQUEST + constants.GENRES:
        draft.genresLoading = true
        break
      case constants.RESPONSE + constants.GENRES:
        draft.genresLoading = false
        draft.genres = action.genres
        break
      case constants.ERROR + constants.GENRES:
        draft.genresLoading = false
        break
      case constants.SET_YEAR:
        draft.selectedYear = action.year
        break
      case constants.SET_RAITING:
        draft.selectedRaiting = action.value
        break
      case constants.SET_GENRE:
        const { id, isChecked } = action.data
        draft.selectedGenres = isChecked
          ? draft.selectedGenres.filter(el => el !== id)
          : (draft.selectedGenres = draft.selectedGenres.concat(id))
        break
    }
  })
