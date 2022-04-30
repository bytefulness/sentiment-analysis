import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html{
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    }

    ul{
        list-style: none;
    }

`;

export default GlobalStyle;
