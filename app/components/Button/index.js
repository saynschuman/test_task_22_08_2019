import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, value, text, className }) => (
  <button
    type="button"
    onClick={onClick}
    data-value={value}
    className={className}
  >
    {text}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number,
  text: PropTypes.string,
  className: PropTypes.string,
}

export default Button
