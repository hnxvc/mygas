import React from 'react'
import styled from 'styled-components'

function PageContent({ children }) {
  return (
    <StyledPage>
      <StyledPageTitle>
        Look up the <span>Gas Fee</span> you paid on Ethereum network
      </StyledPageTitle>
      <StyledPageContent>{children}</StyledPageContent>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 40px 25px 0;
  min-height: calc(100vh - 150px);
`
const StyledPageTitle = styled.h1`
  font-size: 20px;
  font-size: ${(props) => props.theme.font.size.heading}px;
  text-align: center;
  span {
    color: ${(props) => props.theme.color.hightLight};
  }
`

const StyledPageContent = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`

export default PageContent
