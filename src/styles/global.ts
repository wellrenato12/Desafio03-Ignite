import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme['base-title']};
    }

    p {
        color: ${(props) => props.theme['base-text']};
    }

    a {
        text-decoration: none
    }

    span {
        color: ${(props) => props.theme['base-subtitle']};
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
    }
`
