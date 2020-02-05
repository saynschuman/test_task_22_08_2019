import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  label {
    margin-left: 5px !important;
    display: block;
    cursor: pointer;
  }
`

const CheckBoxItem = ({ isChecked, id, title, onChange }) => (
  <Wrapper>
    <input
      id={id}
      type="checkbox"
      checked={isChecked}
      onChange={() => onChange(id, isChecked)}
    />
    <label htmlFor={id}>{title}</label>
  </Wrapper>
)

CheckBoxItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default CheckBoxItem
