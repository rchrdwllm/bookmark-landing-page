import features from "../data/features";
import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import BlueCircle from "./BlueCircle";

const StyledFeatures = styled.section`
    margin-top: 10rem;
    text-align: center;
    .features-content {
        padding: 0 1.5rem;
        @media screen and (min-width: 864px) {
            padding: 0 5rem;
        }
        @media screen and (min-width: 1440px) {
            padding: 0 10rem;
        }
        @media screen and (min-width: 1920px) {
            padding: 0 15rem;
        }
        p {
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
        .features-container {
            margin-top: 3rem;
            .feature-labels {
                @media screen and (min-width: 864px) {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .feature-label {
                    border-bottom: 1px solid var(--gray-blue-opacity);
                    button {
                        position: relative;
                        display: block;
                        height: 100%;
                        padding: 1.5rem 0;
                        margin: auto;
                        cursor: pointer;
                        &:hover {
                            color: var(--red);
                        }
                        @media screen and (min-width: 864px) {
                            padding: 2rem 3rem;
                        }
                        .underline-container {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            display: flex;
                            justify-content: center;
                            width: 100%;
                            height: 3px;
                            .underline {
                                width: 90%;
                                height: 100%;
                                background-color: var(--red);
                                @media screen and (min-width: 864px) {
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
            .feature-details {
                position: relative;
                margin-top: 5rem;
                .feature-detail {
                    position: relative;
                    z-index: 1;
                    @media screen and (min-width: 864px) {
                        display: grid;
                        gap: 7rem;
                        place-items: center;
                        grid-template-columns: 1fr 1fr;
                    }
                    .img-container {
                        width: 100%;
                    }
                    .content-container {
                        margin-top: 5rem;
                        @media screen and (min-width: 864px) {
                            margin: 0;
                            text-align: left;
                        }
                        p {
                            margin-top: 1.5rem;
                            width: 100%;
                        }
                        button {
                            margin-top: 1.5rem;
                            display: none;
                            background-color: var(--blue);
                            border-radius: 3px;
                            color: var(--white);
                            padding: 0.75rem 1.5rem;
                            box-shadow: var(--box-shadow);
                            border: 2px solid var(--blue);
                            &:hover {
                                background-color: var(--transparent);
                                color: var(--blue);
                            }
                            @media screen and (min-width: 864px) {
                                display: block;
                            }
                        }
                    }
                }
                .blue-circle {
                    top: 2rem;
                    left: -8rem;
                    @media screen and (min-width: 864px) {
                        top: unset;
                        bottom: -4rem;
                        left: -30rem;
                    }
                    @media screen and (min-width: 1024px) {
                        left: -44rem;
                    }
                    @media screen and (min-width: 1920px) {
                        left: -55rem;
                        bottom: -5rem;
                    }
                }
            }
        }
    }
`;

const featureVariants = {
    image: {
        initial: {
            scale: 0,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                ease: [0.22, 1, 0.36, 1],
                duration: 0.5,
            },
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: {
                ease: [0.22, 1, 0.36, 1],
                duration: 0.5,
            },
        },
    },
    content: {
        initial: {
            opacity: 0,
            y: 75,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.22, 1, 0.36, 1],
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            y: -75,
            transition: {
                ease: [0.22, 1, 0.36, 1],
                duration: 0.5,
            },
        },
    },
};

const Features = () => {
    const [toggledFeature, setToggledFeature] = useState<string>(
        features[0].label
    );

    return (
        <StyledFeatures>
            <div className="features-content">
                <h1>Features</h1>
                <p>
                    Our aim is to make it quick and easy for you to access your
                    favourite websites. Your bookmarks sync between your devices
                    so you can access them on the go.
                </p>
                <div className="features-container">
                    <div className="feature-labels">
                        {features.map(({ label }) => (
                            <div className="feature-label" key={label}>
                                <button
                                    onClick={() => setToggledFeature(label)}
                                >
                                    {label}
                                    <AnimatePresence initial={false}>
                                        {toggledFeature === label && (
                                            <motion.div
                                                className="underline-container"
                                                key="underline-container"
                                                layoutId="underline-container"
                                            >
                                                <div className="underline"></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="feature-details">
                        <AnimatePresence initial={false} exitBeforeEnter>
                            {features.map(
                                ({ label, title, caption, image }) =>
                                    label === toggledFeature && (
                                        <motion.div
                                            className="feature-detail"
                                            key={label}
                                            layout
                                        >
                                            <motion.div
                                                className="img-container"
                                                layout
                                            >
                                                <motion.img
                                                    src={image}
                                                    alt="feature"
                                                    variants={
                                                        featureVariants.image
                                                    }
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    layout
                                                    data-scroll
                                                    data-scroll-speed="2"
                                                />
                                            </motion.div>
                                            <motion.div
                                                className="content-container"
                                                variants={
                                                    featureVariants.content
                                                }
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                layout
                                            >
                                                <motion.h1 layout>
                                                    {title}
                                                </motion.h1>
                                                <motion.p
                                                    variants={
                                                        featureVariants.content
                                                    }
                                                    initial="initial"
                                                    animate="animate"
                                                    exit="exit"
                                                    layout
                                                >
                                                    {caption}
                                                </motion.p>
                                                <button>More info</button>
                                            </motion.div>
                                        </motion.div>
                                    )
                            )}
                        </AnimatePresence>
                        <BlueCircle />
                    </div>
                </div>
            </div>
        </StyledFeatures>
    );
};

export default Features;
