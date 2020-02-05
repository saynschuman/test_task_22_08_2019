import { call, put, takeLatest, all } from 'redux-saga/effects'
import request from 'utils/request'
import * as movies from 'api'
import * as actions from './actions'
import * as constants from './constants'

export function* dataWorker(data) {
  try {
    const { query } = data
    const moviesList = yield call(request, movies.getSearchUrl(query))
    yield put(actions.dataResponse(moviesList))
  } catch {
    yield put(actions.dataError())
  }
}

export function* genresWorker() {
  try {
    const genresList = yield call(request, movies.genres)
    yield put(actions.genresResponse(genresList.genres))
  } catch {
    yield put(actions.genresError())
  }
}

export function* movieWorker(action) {
  try {
    const movie = yield call(request, movies.getMovie(action.id))
    yield put(actions.movieResponse(movie))
  } catch {
    yield put(actions.movieError())
  }
}

export function* moreDataWorker(data) {
  try {
    const { query, page } = data.data
    const list = yield call(request, movies.getMoreUrl(query, page))
    yield put(actions.moreMoviesRespnse(list))
  } catch {
    yield put(actions.moreMoviesError())
  }
}

export default function* watcher() {
  yield all([
    takeLatest(constants.REQUEST, dataWorker),
    takeLatest(constants.REQUEST + constants.GENRES, genresWorker),
    takeLatest(constants.REQUEST + constants.MOVIE, movieWorker),
    takeLatest(constants.REQUEST + constants.MORE, moreDataWorker),
  ])
}
