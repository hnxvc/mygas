
import React from 'react'
import Card from './Card'
import styled from 'styled-components';
const imageEth = '/img/eth.png'
const imageClock = '/img/clock.png'
const imagePizza = '/img/pizza.png'

function Cards({gasFees}) {
  return (
    <StyledCards>
      <Card 
        number={gasFees.total}
        description={'Total Gas Fees'}
        icon={imageEth}
        decimals={3}
        prefix={'$'}
      />
      <Card 
        number={gasFees.daily}
        description={'24H Gas Fees'}
        icon={imageClock}
        prefix={'$'}
        decimals={3}
      />
      <Card 
        number={gasFees.pizza}
        description={'Can be used to buy these pizzas'}
        icon={imagePizza}
      />
    </StyledCards>
  )
}

const StyledCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export default Cards
