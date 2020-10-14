import React from 'react'
import styled from 'styled-components'

function Form({value, onChange, onSubmit, disabled, loading}) {
  return (
    <StyledForm>
      <StyledInput placeholder={'Enter a Ethereum address'} 
        value={value}
        onChange={onChange}
      />
      <StyledButton 
        onClick={onSubmit}
        disabled={disabled}
      >
        { loading ? 'Loading ...' : 'Let\'s go'}
      </StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.color.section};
  padding: 20px 20px 20px 20px;
  border-radius: ${(props) => props.theme.border.radius}px;
`

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.color.hightLight};
  border-radius: ${(props) => props.theme.border.radius}px;
  width: 100%;
  color: ${(props) => props.theme.color.section};
  font-size: ${(props) => props.theme.font.size.big}px;
  padding: 15px 20px;
`

const StyledButton = styled.button`
  padding: 15px 25px;
  font-size: 16px;
  border: none;
  background-color: ${(props) => props.theme.color.bg};
  border-radius: ${(props) => props.theme.border.radius}px;
  color: ${(props) => props.theme.color.hightLight};
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 768px) {
    position: absolute;
    top: 28px;
    right: 30px;
    padding: 10px 15px;
    width: auto;
    margin-top: 0;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default Form
