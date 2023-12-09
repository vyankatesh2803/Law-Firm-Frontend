import './PracticeAreas.css'
import BusinessLaw from './BusinessLaw.png'
import PartnershipLaw from './PartnershipLaw.png'
import RealEstateLaw from './RealEstateLaw.png'
import BusinessLawSecond from './BusinessLawSecond.png'
import LandlordDisputes from './LandlordDisputes.png'
import ElderAbuse from './ElderAbuse.png'
import PracticeAreaCard from './PracticeAreaCards/PracticeAreaCard.js'

let cardData = [
    {
        src: BusinessLaw,
        title: 'BUSINESS LAW'
    },
    {
        src: PartnershipLaw,
        title: 'PARTNERSHIP LAW'
    },
    {
        src: RealEstateLaw,
        title: 'REAL ESTATE LAW'
    },
    {
        src: BusinessLawSecond,
        title: 'BUSINESS LAW'
    },
    {
        src: LandlordDisputes,
        title: 'LANDLORD DISPUTES'
    },
    {
        src: ElderAbuse,
        title: 'ELDER ABUSE'
    }
]


export default () => {
    return (
        <div className='practice-area-wrapper'>
            <div className='practice-area-header'>Area of Practices</div>
            <PracticeAreaCard cards={cardData} />
        </div>
    )
}
