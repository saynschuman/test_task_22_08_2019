import React from 'react'
import PropTypes from 'prop-types'
import getNumbers from 'utils/functions/getNumbers'

const startYear = 1900
const endYear = 2020

const Select = ({ onChangeYear, selectedYear }) => (
  <select onChange={onChangeYear} name="year">
    <option value="">Выберите год</option>
    {getNumbers(startYear, endYear)
      .reverse()
      .map(year =>
        year === selectedYear ? (
          <option key={year} selected value={year}>
            {year}
          </option>
        ) : (
          <option key={year} value={year}>
            {year}
          </option>
        ),
      )}
  </select>
)

Select.propTypes = {
  onChangeYear: PropTypes.func,
  selectedYear: PropTypes.number,
}

export default Select
