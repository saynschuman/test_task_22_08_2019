import styled from 'styled-components'

const Wrapper = styled.article`
  padding: 20px 0;
  overflow: auto;
  display: block;
  height: ${props => props.height}px;
`

export default Wrapper
