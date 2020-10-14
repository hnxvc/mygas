import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'


function Card({number, description, icon, decimals, prefix}) {
  return (
    <StyledCard>
      <StyledNumber>
        <CountUp 
          end={Number(number)}
          decimals={decimals}
          decimal=","
          prefix={prefix}
        />
      </StyledNumber>
      <StyledDescription>{description}</StyledDescription>
      <StyledIcon>
        <img src={icon} alt="icon"/>
      </StyledIcon>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  border-radius: ${props => props.theme.border.radius}px;
  background-color: ${props => props.theme.color.section};
  width: 32%;
  padding: 20px;
  text-align: center;
`

const StyledNumber = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${props => props.theme.font.size.super}px
`
const StyledDescription = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const StyledIcon = styled.div`
  text-align: center;
  img {
    max-width: 150px;
  }
`

export default Card
