import { createGlobalStyle } from "styled-components";
import Colors from "./colors";
import LocomotiveScrollStyles from "./locomotiveScroll";

const GlobalStyles = createGlobalStyle`
    ${Colors};
    ${LocomotiveScrollStyles};
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }
    body {
        font-size: 1.125rem;
        color: var(--gray-blue);
        a {
            text-decoration: none;
            color: inherit;
            transition: 0.5s color;
        }
        p {
            line-height: 175%;
        }
        button, input {
            background-color: transparent;
            font-size: inherit;
            font-weight: inherit;
            border: none;
            outline: none;
            color: var(--dark-blue);
        }
        button {
            cursor: pointer;
            transition: 0.5s color, 0.5s background-color;
        }
        ul {
            list-style: none;
        }
        img {
            display: block;
            width: 100%;
        }
        h1, h2, h3, h4, h5, h6 {
            font-weight: 500;
            color: var(--dark-blue);
        }
        h1 {
            font-size: 2rem;
            @media screen and (min-width: 1920px) {
                font-size: 3rem;
            }
        }
        section {
            will-change: transform;
        }
    }
`;

export default GlobalStyles;
