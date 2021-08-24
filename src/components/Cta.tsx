import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import validator from "validator";

const StyledCta = styled(motion.section)`
    background-color: var(--blue);
    margin-top: 10rem;
    color: var(--white);
    text-align: center;
    padding: 3.5rem 1.5rem;
    @media screen and (min-width: 864px) {
        padding: 5rem;
    }
    .container {
        @media screen and (min-width: 864px) {
            max-width: 40%;
            margin: auto;
        }
        @media screen and (min-width: 1920px) {
            max-width: 30%;
        }
        p {
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 0.875rem;
        }
        h1 {
            color: inherit;
            margin-top: 0.5rem;
            @media screen and (min-width: 864px) {
                margin-top: 2rem;
            }
        }
        form {
            margin-top: 2.5rem;
            @media screen and (min-width: 864px) {
                display: flex;
                align-items: start;
            }
            .input-container {
                @media screen and (min-width: 864px) {
                    flex-grow: 1;
                }
                .invalid {
                    padding: 1rem;
                    color: var(--white);
                    background-color: var(--red);
                    text-align: left;
                    border-radius: 6px;
                    margin-top: 0.5rem;
                    letter-spacing: 0;
                    text-transform: none;
                }
            }
            input,
            button {
                background-color: var(--white);
                display: block;
                width: 100%;
                color: var(--dark-blue);
                width: 100%;
                border-radius: 6px;
                padding: 1rem;
                @media screen and (min-width: 864px) {
                    width: unset;
                }
                &::placeholder {
                    opacity: 0.5;
                }
            }
            input {
                display: block;
                width: 100%;
                border: 2px solid var(--white);
                transition: 0.5s border, 0.5s color;
            }
            button {
                background-color: var(--red);
                color: var(--white);
                margin-top: 1rem;
                border: 2px solid var(--red);
                &:hover {
                    color: var(--red);
                    background-color: var(--white);
                }
                @media screen and (min-width: 864px) {
                    margin: 0 0 0 1rem;
                }
            }
        }
    }
`;

const Cta = () => {
    const [email, setEmail] = useState<string>("");
    const [invalid, setInvalid] = useState<boolean>(false);

    const validateEmail = (e: any) => {
        e.preventDefault();

        if (!validator.isEmail(email)) setInvalid(true);
    };

    return (
        <StyledCta layout>
            <div className="container">
                <motion.p layout>30,000+ already joined</motion.p>
                <motion.h1 layout>
                    Stay up-to-date with what we're doing
                </motion.h1>
                <form onSubmit={(e) => validateEmail(e)}>
                    <div className="input-container">
                        <motion.input
                            layout
                            type="text"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setInvalid(false);
                            }}
                        />
                        <AnimatePresence>
                            {invalid && (
                                <motion.p
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="invalid"
                                    key="invalid"
                                >
                                    Whoops! Make sure it's an email!
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                    <motion.button layout>Contact us</motion.button>
                </form>
            </div>
        </StyledCta>
    );
};

export default Cta;
