import hero from "../images/illustration-hero.svg";
import styled from "styled-components";
import BlueCircle from "./BlueCircle";

const StyledHero = styled.section`
    padding-top: 10rem;
    @media screen and (min-width: 864px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        direction: rtl;
        gap: 3rem;
        * {
            direction: ltr;
        }
    }
    .hero-img-container {
        position: relative;
        overflow: hidden;
        @media screen and (min-width: 864px) {
            width: 100%;
            padding-right: 5rem;
        }
        @media screen and (min-width: 1920px) {
            padding-right: 10rem;
        }
        img {
            position: relative;
            z-index: 1;
        }
        .blue-circle {
            bottom: 0;
            right: -7rem;
            @media screen and (min-width: 864px) {
                right: -10rem;
            }
            @media screen and (min-width: 1920px) {
                right: -15rem;
            }
        }
    }
    .hero-content {
        margin-top: 3rem;
        padding: 0 1.5rem;
        text-align: center;
        @media screen and (min-width: 864px) {
            padding: 0 0 0 5rem;
            margin: 0;
            text-align: left;
        }
        @media screen and (min-width: 1440px) {
            padding-left: 10rem;
        }
        @media screen and (min-width: 1920px) {
            padding-left: 15rem;
        }
        h1 {
            @media screen and (min-width: 864px) {
                font-size: 3.5rem;
            }
            @media screen and (min-width: 1920px) {
                font-size: 4.5rem;
            }
        }
        p {
            margin-top: 1.5rem;
        }
        .buttons {
            display: flex;
            justify-content: center;
            margin-top: 3rem;
            @media screen and (min-width: 864px) {
                justify-content: start;
            }
            button {
                background-color: var(--blue);
                color: var(--white);
                border-radius: 3px;
                padding: 1rem 0.6rem;
                box-shadow: var(--box-shadow);
                border: 2px solid var(--blue);
                margin: 0 0.5rem;
                &:hover {
                    background-color: var(--transparent);
                    color: var(--blue);
                }
                @media screen and (min-width: 864px) {
                    padding: 1rem 1.75rem;
                    border-radius: 7px;
                    &:last-child {
                        margin-left: 1rem;
                    }
                }
                &:nth-child(2) {
                    background-color: var(--light-gray);
                    color: var(--dark-blue);
                    border: 2px solid var(--light-gray);
                    &:hover {
                        background-color: var(--transparent);
                    }
                }
            }
        }
    }
`;

const Hero = () => {
    return (
        <StyledHero>
            <div className="hero-img-container">
                <img src={hero} alt="hero" data-scroll data-scroll-speed="2" />
                <BlueCircle />
            </div>
            <div className="hero-content">
                <h1>A Simple Bookmark Manager</h1>
                <p>
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                </p>
                <div className="buttons">
                    <button>Get it on Chrome</button>
                    <button>Get it on Firefox</button>
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;
