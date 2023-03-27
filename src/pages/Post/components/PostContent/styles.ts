import styled from 'styled-components'

export const PostoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  color: ${(props) => props.theme['base-text']};

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
  }
`
