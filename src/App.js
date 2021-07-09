import Navbar from "./components/navbar";
import Section1 from "./components/section1.jsx";
import ShortenURL from "./components/ShortenURL.jsx";
import BottomSection from "./components/BottomSection.jsx";
import Boost from "./components/Boost.jsx";
import Footer from "./components/Footer";

import './sass/main.sass'

const App = () => {
    return (
        <main>
            <section className="container">
                <Navbar />
                <Section1 />
                <ShortenURL />
            </section>
            <BottomSection />
            <Boost />
            <Footer />
        </main>
    )
}

export default App;
