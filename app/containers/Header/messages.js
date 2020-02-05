import { defineMessages } from 'react-intl'

export const scope = 'components.Header'

export default defineMessages({
  movies: {
    id: `${scope}.movies`,
    defaultMessage: 'Movies',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Панель фильтров',
  },
})
