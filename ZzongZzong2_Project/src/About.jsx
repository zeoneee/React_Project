import './About.css'
import zeonee from './assets/jihyeon.jpeg'
import charles from './assets/sangmin.png'
import wooki from './assets/wooki.jpeg'

function About() {
    return (
        <div>
            <div className="about-container">
                <div className="about-item-l">
                    <img src={zeonee} alt="zeonee" className="about-img"/>
                    <div className="about-info">
                        <span className="stroke-text">zeonneee_</span><br/>
                    </div>
                </div>
                <div className="about-item-c">
                    <img src={wooki} alt="wooki" className="about-img"/>
                    <div className="about-info">
                        <span className="stroke-text">wookion_on</span>
                    </div>
                </div>
                <div className="about-item-r">
                    <img src={charles} alt="charles" className="about-img"/>
                    <div className="about-info">
                        <span className="stroke-text">charles__s_m</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;