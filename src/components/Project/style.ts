import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
`

export const ButtonLink = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.bgColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.bgColorBtn};
  text-decoration: none;
  padding: 8px;
  margin-top: 20px;
`

export default Card
