import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <StyledFooter>
      <StyledCopyright>
        Copyright© 2020 MyGas. All rights reserved.
      </StyledCopyright>
      <StyledPower>Powered by Etherscan.io and CoinGecko APIs</StyledPower>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  text-align: center;
`

const StyledCopyright = styled.div`
  flex-basis: 50%;
`

const StyledPower = styled.div`
  flex-basis: 50%;
`

export default Footer
