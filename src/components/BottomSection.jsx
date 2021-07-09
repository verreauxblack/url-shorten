import Card from "./Card";
import Brand from '../images/icon-brand-recognition.svg';
import Detail from '../images/icon-detailed-records.svg';
import Fully from '../images/icon-fully-customizable.svg';

const BottomSection = () => {
    return (
        <section className="bottom-section">
            <div className="Advanced">
                <h1>
                    Advanced Statistics
                </h1>
                <p>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>
            <div className="cards">
                <hr/>
                <Card img={Brand} h1={'Brand Recognition'} p={'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'}/>
                <Card img={Detail} h1={'Detailed Records'} p={'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'}/>
                <Card img={Fully} h1={'Fully Customizable'} p={'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}/>
            </div>
        </section>
    )
}

export default BottomSection
