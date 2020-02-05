import { createSelector } from 'reselect'
import { key } from './constants'
import { initialState } from './reducer'

const selectData = state => state[key] || initialState

const selectRouter = state => state.router

export const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  )

export const makeSelectData = () =>
  createSelector(
    selectData,
    state => state.data,
  )

export const makeSelectLoading = () =>
  createSelector(
    selectData,
    state => state.loading,
  )

export const makeSelectGenres = () =>
  createSelector(
    selectData,
    state => state.genres,
  )

export const makeSelectGenresLoading = () =>
  createSelector(
    selectData,
    state => state.genresLoading,
  )

export const makeSelectSelectedYear = () =>
  createSelector(
    selectData,
    state => state.selectedYear,
  )

export const makeSelectSelectedGenres = () =>
  createSelector(
    selectData,
    state => state.selectedGenres,
  )

export const makeSelectCurrentPage = () =>
  createSelector(
    selectData,
    state => state.currentPage,
  )

export const makeSelectQuery = () =>
  createSelector(
    selectData,
    state => state.query,
  )

export const makeSelectSelectedRaiting = () =>
  createSelector(
    selectData,
    state => state.selectedRaiting,
  )

export const makeSelectCurrentMovie = () =>
  createSelector(
    selectData,
    state => state.currentMovie,
  )

export const makeSelectMovieLoading = () =>
  createSelector(
    selectData,
    state => state.movieLoading,
  )

export const makeSelectMoreLoading = () =>
  createSelector(
    selectData,
    state => state.moreLoading,
  )

export const makeSelectTotalPages = () =>
  createSelector(
    selectData,
    state => state.total_pages,
  )
