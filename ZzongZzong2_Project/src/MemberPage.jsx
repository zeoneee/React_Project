import React from "react";
import { Link } from "react-router-dom";
import './MemberPage.css'

function MemberPage() {

    return (
        <div id="app">
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
                                        <li id="no--active">홈 피드</li>
                                    </Link>
                                    <Link to="/MainPage">
                                        <li id="no--active">메인 프로젝트</li>
                                    </Link>
                                    <Link to="/MemberPage">
                                        <li id="is--active">팀원 소개</li>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <div tabindex="-1" class="sub-menu-area">
                        <div class="sub-menu">sub-menu</div>
                    </div> */}
                </div>
            </header>
        </div>
    )
}

export default MemberPage;