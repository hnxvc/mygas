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
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
`

const StyledCopyright = styled.div`
  flex-basis: 50%;
`

const StyledPower = styled.div`
  flex-basis: 50%;
`

export default Footer
