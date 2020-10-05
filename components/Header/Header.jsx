import React from 'react'
import styled from 'styled-components'

function Header() {
  return <StyledHeader>MyGas</StyledHeader>
}

const StyledHeader = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export default Header
