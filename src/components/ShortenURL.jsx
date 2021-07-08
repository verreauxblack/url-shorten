import BgUrlDesk from '../images/bg-shorten-desktop.svg'
const ShortenURL = () => {
    return (
        <section className="URL-section">
            <img src={BgUrlDesk} alt=""/>
            <input type="url" placeholder="Shorten a link here..." />
            <button>
                Shorten it!
            </button>
        </section>
    )
}

export default ShortenURL
