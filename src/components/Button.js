import styled, { css } from 'styled-components'

const Button = styled.button`
	padding: 0.7rem 5rem;
  border-radius: 1.5rem;
  background-color: ${props => props.theme.button.color.background};
  border: none;
  color: ${props => props.theme.button.color.text};
  font-family: Avenir;
  font-weight: 600;
  font-size: 18px;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 19px;
    padding: 1rem 3rem;
  }
  ${props => props.outline && css`
    color: ${props => props.theme.button.color.outline};
    border: 1px solid ${props => props.theme.button.color.outline};
    background-color: transparent;
    border-radius: 0;
  `}
`

export default Button;
