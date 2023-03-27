import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 3.5rem 0 2rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};

    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }
  }
`
