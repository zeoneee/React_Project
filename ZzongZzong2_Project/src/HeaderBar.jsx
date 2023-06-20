import React from "react";
import {Link} from "react-router-dom";
import './HeaderBar.css'

function HeaderBar() {

    const url = location.href;

    return (
        <div id="header">
            <header className="header-comp">
                <div className="header-inner">
                    <div className="global-menu-area">
                        <div className="logo">
                            <img src="src/assets/zzongzzong.jpg"/>
                        </div>
                        <div className="menu">
                            <nav>
                                <ul>
                                    <Link to="/">
                                        <li className={url.includes("/") ? "is-active" : "no-active"}>홈 피드</li>
                                    </Link>
                                    <Link to="/MainPage">
                                        <li className={url.includes("/MainPage") ? "is-active" : "no-active"}>메인 프로젝트
                                        </li>
                                    </Link>
                                    <Link to="/About">
                                        <li className={url.includes("/About") ? "is-active" : "no-active"}>팀원 소개
                                        </li>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderBar;