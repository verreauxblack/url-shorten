import Navbar from "./components/navbar";
import Section1 from "./components/section1.jsx";
import ShortenURL from "./components/ShortenURL.jsx";

import './sass/main.sass'

const App = () => {
    return (
        <main>
            <Navbar />
            <Section1 />
            <ShortenURL />
        </main>
    )
}

export default App;
