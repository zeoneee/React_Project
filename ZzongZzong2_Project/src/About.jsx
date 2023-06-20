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
                        <span className="stroke-text">github: zeoneee</span><br/>
                        <span>이름: 김지현</span><br/>
                        <span>학과: 컴퓨터공학전공</span><br/>
                        <span>학번: 2019112587</span><br/>
                    </div>
                </div>
                <div className="about-item-c">
                    <img src={wooki} alt="wooki" className="about-img"/>
                    <div className="about-info">
                        <span className="stroke-text">github: Kim-TaeUk</span><br/>
                        <span>이름: 김태욱</span><br/>
                        <span>학과: 컴퓨터공학전공</span><br/>
                        <span>학번: 2018112034</span><br/>
                    </div>
                </div>
                <div className="about-item-r">
                    <img src={charles} alt="charles" className="about-img"/>
                    <div className="about-info">
                        <span className="stroke-text">github: charles</span><br/>
                        <span>이름: 이상민</span><br/>
                        <span>학과: 경제학 & 정보통신공학</span><br/>
                        <span>학번: 2017110922</span><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
