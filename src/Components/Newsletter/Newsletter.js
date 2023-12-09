import './Newsletter.css'

export default () => {
    return (
        <div className='newsletter-wrapper'>
            <h1>Subscribe our Newsletter</h1>
            <div className='newsletter-input'>
                <input className='newsletter-name' placeholder='Name'></input>
                <input className='newsletter-mail' placeholder='Enter your Email'></input>
                <button className='newletter-button'>SEND</button>
            </div>
        </div>
    )
}