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
            autoplaySpeed: 2000
        };
        return (
            <div className="slide-box">
                <span className="project-name">ZzongZzong2 Project</span>
                <Slider {...settings}>
                    <div className="each-slide">
                        <span className="page-name">Main Page</span>
                    </div>
                    <div className="each-slide">
                        <span className="page-name">LectureNote Page</span>
                    </div>
                    <div className="each-slide">
                        <span className="page-name">Landing Page</span>
                    </div>
                    <div className="each-slide">
                        <span className="page-name">About Page</span>
                    </div>
                </Slider>
            </div>
        );
    }
}
