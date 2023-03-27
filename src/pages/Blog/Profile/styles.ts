import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  gap: 2rem;
  margin-top: -5rem;
  padding: 2rem;
  border-radius: 6px;
  position: relative;
  z-index: 999;

  img {
    width: 9.25rem;
    border-radius: 6px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: -4rem;

    img {
      width: 5rem;
      height: 5rem;
    }
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  div {
    display: flex;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border-top: transparent;
    border-bottom: transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border 0.5s;
    }
  }
`
