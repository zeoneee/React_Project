import {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Landing.css';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
        };
        return (
            <div className="slide-box">
                <span className="project-name">ZzongZzong2 Project</span>
                <Slider {...settings}>
                    <div className="each-slide">
                        <span className="page-name">Main Page</span><br/>
                        <span>나의 강의노트, 오늘의 다이어리, 단어장 등 기능 제공</span><br/><br/><br/>

                        <span className="function">기능 1 - 반응형: lecture note 컴포넌트 반응형으로 구현했다</span><br/>
                        <span className="function">기능 2 - 과목 추가: 사용자가 수강하는 과목을 추가할 수 있다</span><br/>
                        <span className="function">기능 3 - 다이어리: 사용자가 입력하여 메모장처럼 활용할 수 있다</span><br/>
                        <span className="function">기능 4 - 단어장: 임의의</span><br/>
                    </div>
                    <div className="each-slide">
                        <span className="page-name">LectureNote Page</span><br/>
                        <span>강의 별 팀 프로젝트 관리 및 강의 노트 관리 기능 제공</span><br/><br/><br/>

                        <span className="function">기능 1 - 팀 스케줄: drag & drop 기능으로 구현했다</span><br/>
                        <span className="function">기능 2 - useLocation: page간 데이터 전달(lecture info)</span><br/>
                    </div>
                    <div className="each-slide">
                        <span className="page-name">Landing Page</span><br/>
                        <span>프로젝트 요약</span><br/><br/><br/>

                        <span className="function">기능 1 - Carousel: 기획서에서 제시하여 구현한 기능을 제시한다</span><br/>
                    </div>
                    <div className="each-slide">
                        <span className="page-name">About Page</span><br/>
                        <span>간단한 팀원 소개 페이지</span><br/><br/><br/>

                    </div>
                    <div className="each-slide">
                        <span className="page-name">Error Page</span><br/>
                        <span>path가 지정되지 않은 페이지에 대해 예외 처리</span><br/><br/><br/>

                    </div>
                </Slider>
            </div>
        );
    }
}
