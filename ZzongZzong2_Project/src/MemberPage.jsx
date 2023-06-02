import React from "react";
import { Link } from "react-router-dom";
import './MemberPage.css'

function MemberPage() {

    return (
        <div id="app">
            <header class="header-comp">
                <div class="header-inner">
                    <div class="global-menu-area">
                        <div class="logo">logo</div>
                        <div class="menu">
                            <nav>
                                <ul>
                                    <Link to="/">
                                        <li>홈 피드</li>
                                    </Link>
                                    <Link to="/MainPage">
                                        <li >메인 프로젝트</li>
                                    </Link>
                                    <Link to="/MemberPage">
                                        <li class="is--active">팀원 소개</li>
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