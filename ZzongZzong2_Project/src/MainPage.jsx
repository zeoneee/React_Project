import React from "react";
import './MainPage.css'

function MainPage() {

    return (
        <div id="app">
            <header class="header-comp">
                <div class="header-inner">
                    <div class="global-menu-area">
                        <div class="logo">logo</div>
                        <div class="menu">
                            <nav>
                                <ul>
                                    <li class>홈 피드</li>
                                    <li class="is--active">메인 프로젝트</li>
                                    <li class>팀원 소개</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div tabindex="-1" class="sub-menu-area">
                        <div class="sub-menu">sub-menu</div>
                    </div>
                </div>
            </header>

            <div class="main-banner-comp">
                <div class="main-banner-inner">
                    <div class="title-area">title-area</div>
                    <div class="desc-area">desc-area</div>
                    <div class="bg-area">bg-area</div>
                </div>
            </div>

            <div class="apply-grid-system">
                <div class="layout index main">
                    <div class="content-comp side-menu">
                        <div class="content-inner">
                            <div class="grid-container">
                                {/* <div class="nav-grid-wrapper">네비게이션 바</div> */}
                                <div class="content-area">content area
                                    {/* <div class="head-wrap">content wrap</div> */}
                                    <div class="item-title-area">item title area</div>
                                    <div class="lecture-note">강의 노트</div>
                                </div>
                                <div class="side-area">side area
                                    <div class="diary">diary</div>
                                    <div class="vocab">voca book</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-overlay"></div>
        </div>
    )
}

export default MainPage;