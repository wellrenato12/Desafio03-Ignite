import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-post']};
  padding-bottom: 4rem;

  @media (max-width: 900px) {
    width: 100%;

    img {
      &:nth-child(1) {
        width: 200px;
      }
      &:nth-child(2) {
        width: 100px;
      }
      &:nth-child(3) {
        width: 200px;
      }
    }
  }

  @media (max-width: 600px) {
    img {
      &:nth-child(1) {
        width: 120px;
      }
      &:nth-child(2) {
        width: 100px;
      }
      &:nth-child(3) {
        width: 120px;
      }
    }
  }
`
