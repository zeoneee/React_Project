import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './MainPage.css'
import LectureNote from './LectureNote'

function MainPage() {

    return (
        <div id="app">
            <header className="header-comp">
                <div className="header-inner">
                    <div className="global-menu-area">
                        <div className="logo">logo</div>
                        <div className="menu">
                            <nav>
                                <ul>
                                    <Link to="/">
                                        <li>홈 피드</li>
                                    </Link>
                                    <Link to="/MainPage">
                                        <li className="is--active">메인 프로젝트</li>
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

            <div className="main-banner-comp">
                <div className="main-banner-inner">
                    <div className="title-area">title-area</div>
                    <div className="desc-area">desc-area</div>
                    <div className="bg-area">bg-area</div>
                </div>
            </div>

            <div className="apply-grid-system">
                <div className="layout index main">
                    <div className="content-comp side-menu">
                        <div className="content-inner">
                            <div className="grid-container">
                                {/* <div class="nav-grid-wrapper">네비게이션 바</div> */}
                                <div className="content-area">
                                    {/* <div class="head-wrap">content wrap</div> */}
                                    <div className="item-title-area">나의 강의 노트</div>
                                    <div className="lecture-note-area">
                                        <div className="lecture">
                                            <Link to="/LectureNote">lecture</Link>
                                        </div>
                                        <div className="lecture">lecture</div>
                                        {/* <div class="lecture">lecture</div>
                                        <div class="lecture">lecture</div> */}
                                        {/* lecture flex에서 inline 이후 넘어가는거 적용하기 */}
                                    </div>
                                    content-area
                                </div>
                                <div className="side-area">
                                    <div className="diary">diary</div>
                                    <div className="vocab">voca book</div>
                                    side-area
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-overlay"></div>
            {/* <Routes>
                <Route path="/LectureNote" element={<LectureNote />}/>
            </Routes> */}
        </div>
    )
}

export default MainPage;