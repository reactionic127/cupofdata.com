import styled from 'styled-components'

const Button = styled.button`
	padding: 0.7rem 5rem;
  border-radius: 1.5rem;
  background-color: ${props => props.theme.color.orange};
  border: none;
  color: white;
  font-family: CircularStd;

  &:focus {
    outline: none;
  }
`
export default Button;