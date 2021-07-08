/* eslint-disable jsx-a11y/alt-text */
import Working from '../images/illustration-working.svg'
function section1() {
    return (
        <section className="section1">
            <div className="content" >
                <h1>
                    More than just shorter links
                </h1>
                <p>
                    Build your brand’s recognition and get detailed insights on how your links are performing.
                </p>
                <button>
                    Get Started
                </button>

            </div>
            <div>
                <img src={Working} width="650px"/>
            </div>
        </section>
    )
}

export default section1
