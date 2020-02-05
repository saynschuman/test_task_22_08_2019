import React from 'react'
import PropTypes from 'prop-types'
import getNumbers from 'utils/functions/getNumbers'
import Button from 'components/Button'

const Raiting = ({
  onClick,
  start,
  end,
  selectedRaiting,
  className,
  valueClassName,
}) => (
  <div className={className}>
    {getNumbers(start, end).map(el => (
      <Button key={el} onClick={() => onClick(el)} value={el} text="☆" />
    ))}
    <span className={valueClassName}>{selectedRaiting}</span>
  </div>
)

Raiting.propTypes = {
  onClick: PropTypes.func,
  start: PropTypes.number,
  end: PropTypes.number,
  selectedRaiting: PropTypes.number,
  className: PropTypes.string,
  valueClassName: PropTypes.string,
}

export default Raiting
