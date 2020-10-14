import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'


function Card({number, eth, description, icon, decimals, prefix, preText}) {
  return (
    <StyledCard>
      <StyledNumber>
        <CountUp 
          end={Number(number)}
          decimals={decimals}
          decimal="."
          prefix={prefix}
        />
      </StyledNumber>
      <StyledMeta>
        {
          eth ? '('+eth + ' eth)' : ''
        }
        {
          !eth && preText
        }
      </StyledMeta>
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
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 31%;
  }

  &:hover {
    img {
      transform: scale(1.1, 1.1)
    }
  }
`

const StyledMeta = styled.span`
  margin-top: 5px;
  display: block;
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
    transition: all .2s;
  }
`

export default Card
