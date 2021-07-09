import Navbar from "./components/navbar";
import Section1 from "./components/section1.jsx";
import ShortenURL from "./components/ShortenURL.jsx";
import BottomSection from "./components/BottomSection.jsx";
import Boost from "./components/Boost.jsx";

import './sass/main.sass'

const App = () => {
    return (
        <main>
            <Navbar />
            <Section1 />
            <ShortenURL />
            <BottomSection />
            <Boost />
        </main>
    )
}

export default App;
