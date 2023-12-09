import './navbar.css'
import Logo from './X-Logo.png'

export default () => {
    return (
        <div className='navbar-wrapper'>
            <div className='ig-studio'>
                <img src={Logo} />
                <div className='logo-text'>IGSTUDIO</div>
            </div>
            <div className='navbar-menu'>
                <button>Home</button>
                <button>Attorneys</button>
                <button>Practice Areas</button>
                <button>About Us</button>
            </div>
            <button className='contact-now'>Contact now</button>
        </div>
    )
}