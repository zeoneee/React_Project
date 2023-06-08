import React from "react";
import { Link } from "react-router-dom";
import './HeaderBar.css'

function HeaderBar() {

    return (
        <div id="header-app">
            <header className="header-comp">
                <div className="header-inner">
                    <div className="global-menu-area">
                        <div className="logo">logo</div>
                        <div className="menu">
                            <nav>
                                <ul>
                                    <Link to="/">
                                        <li className="is--active">홈 피드</li>
                                    </Link>
                                    <Link to="/MainPage">
                                        <li>메인 프로젝트</li>
                                    </Link>
                                    <Link to="/MemberPage">
                                        <li>팀원 소개</li>
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

export default HeaderBar;