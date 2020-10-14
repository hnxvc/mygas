import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <StyledFooter>
      <StyledCopyright>
        Copyright© 2020 <a href="https://github.com/hnxvc" target="_blank">Hnx</a>. All rights reserved.
      </StyledCopyright>
      <StyledPower>Powered by Etherscan.io APIs</StyledPower>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 20px 25px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const StyledCopyright = styled.div`
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`

const StyledPower = styled.div`
margin-top: 20px;

  @media (min-width: 768px) {
    flex-basis: 50%;
    margin-top: 0;
  }
`

export default Footer
