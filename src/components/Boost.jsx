import Design from '../images/bg-boost-desktop.svg'
import DesignMobile from '../images/bg-boost-mobile.svg'
const Boost = () => {
    return (
        <section className="boost">
            <img id="desk" src={Design} alt="" />
            <img id="mobile" src={DesignMobile} alt="" />
            <h1>Boost your links today</h1>
            <button>Get started</button>
        </section>
    )
}

export default Boost
