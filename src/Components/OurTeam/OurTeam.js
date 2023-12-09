import './OurTeam.css'
import DanialDef from './DanialDef.png'
import Sanfole from './Sanfole.png'
import Cesforila from './Cesforila.png'
import Colleen from './Colleen.png'
import Haldone from './Haldone.png'
import NikJeo from './NikJeo.png'


export default () => {
    return (
        <div className="team-list-wrapper">
            <div className='team-list-header'>Our Team</div>
            <div className='team-list-card-wrapper'>
                <div className="team-list-card">
                    <img src={DanialDef}/>
                    <div className="team-list-card-details">
                        <div className="team-list-card-name">Danial Def</div>
                        <div className="team-list-card-cases">301 cases</div>
                    </div>
                </div>
                <div className="team-list-card">
                    <img src={Sanfole}/>
                    <div className="team-list-card-details">
                        <div className="team-list-card-name">Sanfole</div>
                        <div className="team-list-card-cases">850 cases</div>
                    </div>
                </div>
                <div className="team-list-card">
                    <img src={Cesforila}/>
                    <div className="team-list-card-details">
                        <div className="team-list-card-name">Cesforila</div>
                        <div className="team-list-card-cases">470 cases</div>
                    </div>
                </div>
                <div className="team-list-card">
                    <img src={Colleen}/>
                    <div className="team-list-card-details">
                        <div className="team-list-card-name">Colleen</div>
                        <div className="team-list-card-cases">180 cases</div>
                    </div>
                </div>
                <div className="team-list-card">
                    <img src={Haldone}/>
                    <div className="team-list-card-details">
                        <div className="team-list-card-name">Haldone</div>
                        <div className="team-list-card-cases">212 cases</div>
                    </div>
                </div>
                <div className="team-list-card">
                    <img src={NikJeo}/>
                    <div>
                        <div className="team-list-card-name">NikJeo</div>
                        <div className="team-list-card-cases">350 cases</div>
                    </div>
                </div>
            </div>
        </div>
    )
}