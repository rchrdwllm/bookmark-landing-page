import logo from "../images/logo-bookmark.svg";
import burger from "../images/icon-hamburger.svg";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Menu from "./Menu";

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 1.5rem;
    background-color: var(--white);
    pointer-events: none;
    @media screen and (min-width: 864px) {
        padding: 2.5rem 5rem;
    }
    @media screen and (min-width: 1440px) {
        padding: 3rem 10rem;
    }
    @media screen and (min-width: 1920px) {
        padding: 3rem 15rem;
    }
    a,
    button {
        display: flex;
        align-items: center;
        cursor: pointer;
        pointer-events: all;
    }
    .desktop-nav-links {
        display: none;
        justify-content: space-between;
        align-items: center;
        @media screen and (min-width: 864px) {
            display: flex;
        }
        li {
            &:not(:last-child) {
                margin-right: 3rem;
            }
            a {
                color: var(--dark-blue);
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 1rem;
                font-weight: 500;
                &:hover {
                    color: var(--red);
                }
            }
            button {
                background-color: var(--red);
                border-radius: 3px;
                color: var(--white);
                text-transform: uppercase;
                letter-spacing: 2px;
                padding: 0.75rem 2rem;
                box-shadow: var(--box-shadow);
                font-size: 1rem;
                font-weight: 500;
                border: 2px solid var(--red);
                &:hover {
                    color: var(--red);
                    background-color: var(--white);
                }
            }
        }
    }
    .toggle-menu {
        @media screen and (min-width: 864px) {
            display: none;
        }
    }
`;

const Nav = () => {
    const [toggled, setToggled] = useState<boolean>(false);

    return (
        <StyledNav>
            <a href="/" className="logo-container">
                <img src={logo} alt="logo" />
            </a>
            <motion.button
                animate={{ opacity: toggled ? 0 : 1 }}
                className="toggle-menu"
                onClick={() => setToggled(true)}
            >
                <img src={burger} alt="burger" />
            </motion.button>
            <ul className="desktop-nav-links">
                <li>
                    <a href="/">Features</a>
                </li>
                <li>
                    <a href="/">Pricing</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <button>Login</button>
                </li>
            </ul>
            <AnimatePresence>
                {toggled && (
                    <Menu key="menu" setToggled={() => setToggled(false)} />
                )}
            </AnimatePresence>
        </StyledNav>
    );
};

export default Nav;
