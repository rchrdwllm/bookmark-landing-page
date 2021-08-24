import faqs from "../data/faqs";
import styled from "styled-components";
import { motion } from "framer-motion";
import Faq from "./Faq";

const StyledFaqs = styled.section`
    margin-top: 10rem;
    padding: 0 1.5rem;
    @media screen and (min-width: 864px) {
        max-width: 50%;
        margin: 10rem auto 0;
    }
    @media screen and (min-width: 1920px) {
        margin-top: 15rem;
        max-width: 35%;
    }
    .faqs-content {
        text-align: center;
        p {
            margin-top: 1.5rem;
        }
    }
    .faqs-container {
        margin-top: 5rem;
    }
    .more-info {
        display: block;
        background-color: var(--blue);
        margin: 4rem auto 0;
        color: var(--white);
        border-radius: 6px;
        padding: 1rem 1.5rem;
        box-shadow: var(--box-shadow);
        border: 2px solid var(--blue);
        &:hover {
            background-color: var(--transparent);
            color: var(--blue);
        }
    }
`;

const Faqs = () => {
    return (
        <StyledFaqs>
            <motion.div layout className="faqs-content">
                <h1>Frequently Asked Questions</h1>
                <p>
                    Here are some of our FAQs. If you have any other questions
                    you’d like answered please feel free to email us.
                </p>
            </motion.div>
            <motion.div layout className="faqs-container">
                {faqs.map((faq) => (
                    <Faq key={faq.question} {...faq} />
                ))}
            </motion.div>
            <motion.button layout className="more-info">
                More info
            </motion.button>
        </StyledFaqs>
    );
};

export default Faqs;
