import './WhyChooseUs.css'
import WcuCard from './WcuCards/WcuCard'
 
export default () => {
    return (
        <div className='wcu-wrapper'>
            <div className='wcu-heading'>Why Choose Us ?</div>
            <div className='wcu-card'>
                <WcuCard percentage='98'/>
                <WcuCard percentage='100'/>
                <WcuCard percentage='100'/>
            </div>
        </div>
    )
}
