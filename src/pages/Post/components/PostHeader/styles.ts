import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        transition: border 0.5s;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }

      p {
        color: ${(props) => props.theme['base-span']};
      }
    }
  }

  @media (max-width: 600px) {
    width: 300px;

    header {
      a {
        font-size: 0.75rem;
      }
    }

    h2 {
      font-size: 1rem;
    }

    div {
      flex-direction: column;
      gap: 1rem;

      span {
        font-size: 0.75rem;
      }
    }
  }
`
