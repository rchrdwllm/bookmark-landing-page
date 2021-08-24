import bgDots from "../images/bg-dots.svg";
import type { Browser } from "../data/browsers";
import styled from "styled-components";

const StyledExtension = styled.div`
    box-shadow: var(--card-box-shadow);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    &:not(:first-child) {
        margin-top: 2rem;
        @media screen and (min-width: 864px) {
            margin-top: 0;
        }
    }
    @media screen and (min-width: 864px) {
        margin: 0 1rem;
        &:first-child {
            top: -2rem;
        }
        &:last-child {
            bottom: -2rem;
        }
    }
    .browser-details {
        padding: 3rem 1.5rem 1.5rem;
        @media screen and (min-width: 864px) {
            flex-grow: 1;
        }
        .img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1.5rem;
            img {
                width: 40%;
                height: 100%;
            }
        }
        p {
            margin-top: 0.5rem;
            font-size: 0.875rem;
        }
    }
    .btn-container {
        padding: 1.5rem;
        button {
            background-color: var(--blue);
            color: var(--white);
            width: 100%;
            border-radius: 6px;
            padding: 1rem 0;
            box-shadow: var(--box-shadow);
            border: 2px solid var(--blue);
            &:hover {
                background-color: var(--transparent);
                color: var(--blue);
            }
        }
    }
`;

const Extension = ({ browser, name, minVersion, scrollSpeed }: Browser) => {
    return (
        <StyledExtension data-scroll data-scroll-speed={scrollSpeed}>
            <div className="browser-details">
                <div className="img-container">
                    <img src={browser} alt="browser" />
                </div>
                <h3>Add to {name}</h3>
                <p>Minimum version {minVersion}</p>
            </div>
            <img src={bgDots} alt="dots" />
            <div className="btn-container">
                <button>Add & Install Extension</button>
            </div>
        </StyledExtension>
    );
};

export default Extension;
