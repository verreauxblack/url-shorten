/* eslint-disable jsx-a11y/anchor-is-valid */
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Insta from '../images/icon-instagram.svg'
import LogoWhite from '../images/logoWhite.svg'

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={LogoWhite} alt="" />
            </div>
            <div className="links">
                <ul className="features">
                    <h1>Features</h1>
                    <li className="link">Link Shortening</li>
                    <li className="link">Branded Links</li>
                    <li className="link">Analytics</li>
                </ul>
                <ul className="resources">
                    <h1>Resources</h1>
                    <li className="link">Blog</li>
                    <li className="link">Developers</li>
                    <li className="link">Support</li>
                </ul>
                <ul className="company">
                    <h1>Company</h1>
                    <li className="link">About</li>
                    <li className="link">Our Team</li>
                    <li className="link">Careers</li>
                    <li className="link">Contact</li>
                </ul>
                <ul className="social">
                    <li className="link"> <a href="#"> <img src={Facebook} alt="" /> </a> </li>
                    <li className="link"> <a href="#"> <img src={Twitter} alt="" /> </a> </li>
                    <li className="link"> <a href="#"> <img src={Pinterest} alt="" /> </a> </li>
                    <li className="link"> <a href="#"> <img src={Insta} alt="" /> </a> </li>

                </ul>

            </div>
        </footer>
    )
}

export default Footer
