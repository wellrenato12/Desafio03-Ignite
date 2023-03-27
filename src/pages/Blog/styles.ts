import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 54rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`
