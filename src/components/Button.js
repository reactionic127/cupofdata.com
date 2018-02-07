import styled, { css } from 'styled-components'

const Button = styled.button`
	padding: 0.7rem 5rem;
  border-radius: 1.5rem;
  background-color: ${props => props.theme.button.color.background};
  border: none;
  color: ${props => props.theme.button.color.text};
  font-family: CircularStd;
  font-size: 18px;
  
  &:focus {
    outline: none;
  }
  ${props => props.outline && css`
    color: ${props => props.theme.button.color.outline};
    border: 1px solid ${props => props.theme.button.color.outline};
    background-color: transparent;
    border-radius: 0;
  `}
`
export default Button;