import React from 'react'
import styled from 'styled-components'

function Form() {
  return (
    <StyledForm>
      {/* <StyledInput placeHolder={'Enter a Ethereum address'} /> */}
      {/* <StyledButton>Let's go</StyledButton> */}
    </StyledForm>
  )
}

const StyledForm = styled.div`
  position: relative;
  padding-right: 30px;
  background-color: ${(props) => props.theme.color.section};
`

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.color.hightLight};
`

const StyledButton = styled.button`
  position: absolute;
  top: 5px;
  right: 0;
`

export default Form
