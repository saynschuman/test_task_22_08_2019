import styled from 'styled-components'
import { device } from 'ui/mediaQueries'

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding: 0 15px;
  flex-direction: row;
  position: relative;
  width: 100%;
  max-width: 1800px;
  left: 0;
  right: 0;
  margin: auto;
`

export const Main = styled.div`
  display: block;
  position: relative;
  width: 100%;
  transition: 1s;
`

export const Body = styled.div`
  margin-top: 150px;
  font-size: 16px;
  padding: 20px 20px;
  width: ${props => (props.isFullPageWidth ? '100%' : 'calc(100% - 300px)')};
  position: relative;
  z-index: 9;
  background-color: #fff;
  ${device.tablet} {
    width: 100%;
  }
  ${device.mobile} {
    margin-top: 230px;
  }
  article {
    overflow: hidden;
  }
`
