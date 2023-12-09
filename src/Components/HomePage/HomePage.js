import './HomePage.css'
import Navbar from './navbar/navbar'
import Man from './SuitMan.png'



export default () => {
    return (
        <div className='home-page-wrapper'>
            <Navbar />
            <div className='home-page-details-wrapper'>
                <div className='home-page-details'>
                    <div className='hp-d-first'>You don't have to <br/><strong>Fight them alone.</strong></div>
                    <div className='hp-d-second lorem-ipsum'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</div>
                    <form className='hp-d-form'>
                        <input className='hp-d-input' placeholder='Enter your email address' type='text'></input>
                        <button className='hp-d-submit'>Let's Talk</button>
                    </form>
                </div>
                <img src={Man} />
            </div>
        </div>

    )
}