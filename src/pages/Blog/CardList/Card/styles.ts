import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 26rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  border-radius: 6px;

  &:hover {
    outline: 1px solid ${(props) => props.theme['base-label']};
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    width: 300px;
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h4 {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    p {
      width: 100px;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
