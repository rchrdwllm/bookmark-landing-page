import type { Faq as FaqType } from "../data/faqs";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const StyledFaq = styled(motion.article)`
    padding: 1rem 0;
    border-bottom: 1px solid var(--gray-blue-opacity);
    cursor: pointer;
    .question-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--dark-blue);
        transition: 0.5s color;
        &:hover {
            color: var(--red);
        }
    }
    .answer-container {
        margin-top: 1rem;
    }
`;

const Faq = ({ question, answer }: FaqType) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <StyledFaq layout onClick={() => setIsOpen(!isOpen)}>
            <motion.div layout className="question-container">
                <p>{question}</p>
                <motion.button
                    animate={{
                        rotate: isOpen ? "180deg" : 0,
                        transition: {
                            ease: [0.22, 1, 0.36, 1],
                            duration: 0.5,
                        },
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                    >
                        <motion.path
                            animate={{
                                stroke: isOpen ? "var(--red)" : "var(--blue)",
                            }}
                            fill="none"
                            strokeWidth="3"
                            d="M1 1l8 8 8-8"
                        />
                    </svg>
                </motion.button>
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layout
                        className="answer-container"
                    >
                        <p className="answer">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </StyledFaq>
    );
};

export default Faq;
