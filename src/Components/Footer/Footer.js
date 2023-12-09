import './Footer.css'
import Logo from './X-Logo.png'
import Instagram from './instagram.png'
import Facebook from './facebook.png'
import Twitter from './twitter.png'
import Pinterest from './pinterest.png'

export default () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-button'>
                <div className='ig-studio'>
                    <img src={Logo} />
                    <div className='logo-text'>IGSTUDIO</div>
                </div>
                <div className='footer-menu'>
                    <button>Home</button>
                    <button>Attorneys</button>
                    <button>Practice Areas</button>
                    <button>About Us</button>
                </div>
                <div className='social-media'>
                    <img src={Instagram}/>
                    <img src={Facebook}/>
                    <img src={Twitter}/>
                    <img src={Pinterest}/>
                </div>
            </div>
            <div className='footer-terms'>
                <p>© 2020 Acme. All right reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    )
}