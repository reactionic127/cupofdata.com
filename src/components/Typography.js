import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-family: GTWalsheim;
  margin: 0;
`
export const H2 = styled.h2`
  font-size: 40px;
  line-height: 48px;
  margin: 0;
  color: rgba(0,0,0,.9);
  font-family: GTWalsheim;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    line-height: 28px;
  }
`
export const H3 = styled.h3`
  font-size: 36px;
  margin: 0;
`
export const H4 = styled.h4`
  font-size: 24px;
  line-height: 28px;
  margin: 0;
`
export const H5 = styled.h5`
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  font-family: Avenir;
  @media screen and (max-width: 576px) {
    font-size: 16px;
    line-height: 26px;
  }
`
export const H6 = styled.h6`
  font-size: 16px;
  line-height: 26px;
  margin: 0;
  font-family: Avenir;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    line-height: 23px;
  }
`
export const P = styled.p`
  font-size: 14px;
  line-height: 29px;
  margin: 0;
  font-family: Avenir;
`
export const SectionTitle = styled.h2`
	font-size: 40px;
  font-family: GTWalsheim;
  line-height: 47px;
  text-align: center;
  color: rgba(0,0,0,.9);
  margin: 0;
`

export const Title = styled.h4`
	font-family: Avenir;
  font-size: 18px;
  line-height: 30px;
  font-weight: 600;
  margin: 0;
`

export const SubTitle = styled.h5`
	line-height: 26px;
  font-family: Avenir;
  font-size: 16px;
`
export const Comments = styled.h6`
  font-family: AvenirLight;
  font-size: 12px;
  line-height: 16px;
  font-style: Italic;
`