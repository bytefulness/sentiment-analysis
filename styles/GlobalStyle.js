import { createGlobalStyle } from "styled-components";
import { colors } from "theme";

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
    color: ${colors.grayPalette[900]};
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

`;

export default GlobalStyle;
