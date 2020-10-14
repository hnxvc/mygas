import React, { useEffect, useState } from 'react'
import { getCurrentGasWei } from '../../services/etherscan.service'
import styled from 'styled-components'

function GasTracker() {
  const [gasTracker, setGasTracker ] = useState({SafeGasPrice: 0, ProposeGasPrice: 0, FastGasPrice: 0})

  const fetchData = async () => {
    const result = await getCurrentGasWei()
    console.log(result)
    setGasTracker(result) 
  }

  useEffect(() => {
    const x = setInterval(() => {
      fetchData()
    }, 15000)

    return () => clearInterval(x)
  }, [fetchData])

  const { SafeGasPrice, ProposeGasPrice, FastGasPrice } = gasTracker
  return (
    <>
      <StyledTitle>Ethereum Gas Tracker</StyledTitle>
      <StyledGasTracker>
      <StyledGasWei>
        😜 Low: {SafeGasPrice}
      </StyledGasWei>
      <StyledGasWei>
        😄 Average: {ProposeGasPrice}
      </StyledGasWei>
      <StyledGasWei>
        🙂 High: {FastGasPrice}
      </StyledGasWei>
    </StyledGasTracker>
    </>
    
  )
}

const StyledTitle = styled.h3`
  text-align: center;
  font-size: ${props => props.theme.font.size.heading}px;
`

const StyledGasTracker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: ${props => props.theme.border.radius}px;
  background-color: ${props => props.theme.color.section};
  color: ${props => props.theme.color.text};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const StyledGasWei = styled.div`
  font-size: ${props => props.theme.font.size.big}px;
  padding: 0 20px;
  text-align: left;
  width: 100%;
  margin: 5px 0;

  @media (min-width: 768px) {
    text-align: center;
    width: auto;
    margin: 0 0;
  }
`



export default GasTracker
