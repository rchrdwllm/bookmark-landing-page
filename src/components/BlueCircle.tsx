import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCircle = styled(motion.div)`
    position: absolute;
    background-color: var(--blue);
    border-radius: 9999px;
    width: 100%;
    height: 13rem;
    @media screen and (min-width: 864px) {
        height: 13rem;
    }
    @media screen and (min-width: 1024px) {
        height: 20rem;
    }
    @media screen and (min-width: 1920px) {
        height: 27rem;
    }
`;

const BlueCircle = () => {
    return <StyledCircle layout className="blue-circle"></StyledCircle>;
};

export default BlueCircle;
