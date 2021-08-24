import browsers from "../data/browsers";
import styled from "styled-components";
import { motion } from "framer-motion";
import Extension from "./Extension";

const StyledExtensions = styled(motion.section)`
    margin-top: 10rem;
    text-align: center;
    padding: 0 1.5rem;
    @media screen and (min-width: 864px) {
        margin-top: 15rem;
    }
    .extension-content p {
        margin-top: 1.5rem;
        display: block;
        margin: 1.5rem auto 0;
        @media screen and (min-width: 864px) {
            width: 50%;
        }
        @media screen and (min-width: 1920px) {
            width: 35%;
        }
    }
    .extensions {
        padding: 0 1.5rem;
        margin-top: 4rem;
        @media screen and (min-width: 864px) {
            display: flex;
            justify-content: center;
            margin-top: 5rem;
        }
    }
`;

const Extensions = () => {
    return (
        <StyledExtensions layout>
            <div className="extension-content">
                <h1>Download the extension</h1>
                <p>
                    We’ve got more browsers in the pipeline. Please do let us
                    know if you’ve got a favourite you’d like us to prioritize.
                </p>
            </div>
            <div className="extensions">
                {browsers.map((browser) => (
                    <Extension key={browser.browser} {...browser} />
                ))}
            </div>
        </StyledExtensions>
    );
};

export default Extensions;
