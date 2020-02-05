import styled from 'styled-components'
import { device } from 'ui/mediaQueries'

const Wrapper = styled.header`
  .raiting-number {
    font-weight: bold;
    padding-left: 10px;
    font-size: 20px;
    white-space: nowrap;
    line-height: 1.5;
  }
  .rating {
    display: flex;
    align-items: center;
    ${device.tablet} {
      width: 100px;
    }
    ${device.mobile} {
      width: 100px;
      margin: auto;
    }
  }
  .rating > button {
    border: none;
    background-color: #fff;
    display: inline;
    &:focus {
      outline: none;
    }
    &[data-value='1'] {
      color: ${props => (props.selectedRaiting >= 1 ? 'orange' : 'inherit')};
    }
    &[data-value='2'] {
      color: ${props => (props.selectedRaiting >= 2 ? 'orange' : 'inherit')};
    }
    &[data-value='3'] {
      color: ${props => (props.selectedRaiting >= 3 ? 'orange' : 'inherit')};
    }
    &[data-value='4'] {
      color: ${props => (props.selectedRaiting >= 4 ? 'orange' : 'inherit')};
    }
    &[data-value='5'] {
      color: ${props => (props.selectedRaiting >= 5 ? 'orange' : 'inherit')};
    }
    font-size: 22px;
    padding: 0;
    line-height: 1;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
  display: flex;
  justify-content: space-between;
  max-width: 1470px;
  font-size: 12px;
  padding: 10px 20px;
  align-items: center;
  position: fixed;
  width: ${props =>
    props.isFPW ? 'calc(100% - 30px)' : 'calc(100% - 30px - 300px)'};
  right: ${props => (props.isFPW ? '15px' : '300px + 30px')};
  height: 170px;
  z-index: 99;
  background-color: #fff;
  border-bottom: 5px solid #fafafa;
  ${device.tablet} {
    width: calc(100% - 30px);
  }
  ${device.mobile} {
    width: calc(100% - 30px);
    height: 250px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: #fff;
    bottom: -25px;
    left: 0;
  }
  input[type='search'],
  select {
    height: 30px;
    padding: 0 5px;
    margin: 10px 0;
    width: calc(100% - 5px);
    &:focus {
      outline: none;
    }
  }
  input,
  label,
  select {
    display: block;
    margin: 5px 0;
  }
  .search-block {
    margin-right: 20px;
    ${device.mobile} {
      margin-right: 0;
      width: 100%;
      text-align: center;
      input,
      button,
      select {
        margin: 5px auto 10px;
        width: 100%;
        height: 30px;
      }
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    button {
      display: none;
    }
    div {
      width: 25%;
    }
    ${device.mobile} {
      position: fixed;
      top: ${props => (props.mFVisible ? 0 : '-50%')};
      background-color: #fff;
      padding: 15px;
      left: 15px;
      width: calc(100% - 30px);
      div {
        width: 50%;
      }
    }
  }
  .show-filters {
    visibility: hidden;
  }
  ${device.mobile} {
    .show-filters {
      transition: 0.1s;
      visibility: visible;
      position: ${props => (props.mFVisible ? 'absolute' : 'relative')};
      bottom: ${props => (props.mFVisible ? '-100px' : 'none')};
      left: ${props => (props.mFVisible ? '0' : 'none')};
      z-index: 999;
      width: 100%;
    }
  }
  .reset-filters {
    text-align: center;
    text-decoration: none;
    color: #0093dd;
    &:hover {
      text-decoration: underline;
    }
  }
`
export default Wrapper
