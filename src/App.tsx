import { AnimateSharedLayout } from "framer-motion";
import GlobalStyles from "./styles/globalStyles";
import Nav from "./components/Nav";
import ScrollContainer from "./components/ScrollContainer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extensions from "./components/Extensions";
import Faqs from "./components/Faqs";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <AnimateSharedLayout type="crossfade">
                <GlobalStyles />
                <Nav />
                <ScrollContainer>
                    <Hero />
                    <Features />
                    <Extensions />
                    <Faqs />
                    <Cta />
                    <Footer />
                </ScrollContainer>
            </AnimateSharedLayout>
        </>
    );
};

export default App;
