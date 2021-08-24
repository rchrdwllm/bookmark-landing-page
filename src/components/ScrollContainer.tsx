import { FunctionComponent } from "react";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const ScrollContainer: FunctionComponent = ({ children }) => {
    const scrollRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={{ smooth: true }}
            watch={[]}
            containerRef={scrollRef}
        >
            <div
                className="smooth-scroll"
                data-scroll-container
                ref={scrollRef}
            >
                {children}
            </div>
        </LocomotiveScrollProvider>
    );
};

export default ScrollContainer;
