import React from "react";
import './LectureNote.css'

function LectureNote(){



    return <div id="lecture">
        <header className="header-comp">
                <div className="header-inner">
                    <div className="global-menu-area">
                        <div className="logo">logo</div>
                        <div className="menu">
                            <nav>
                                <ul>
                                    <li className="is--active">홈 피드</li>
                                    <li className="is--active">메인 프로젝트</li>
                                    <li className="is--active">팀원 소개</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <div tabindex="-1" className="sub-menu-area">
                        <div className="sub-menu">sub-menu</div>
                    </div> */}
                </div>
            </header>
            <main className="lecture-main"> 
                <div id="lecture-info">
                    <div id="lec-title">웹 프로그래밍</div>
                    <div id="lec-info">
                        <div>
                            <ul>
                                <li>교과목명</li>
                                <li>학수번호</li>
                                <li>담당교수</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>강의실</li>
                                <li>강의시간</li>
                                <li>이메일</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="lecture-team-schedule">
                    <div className="sche-title">
                        팀 스케줄
                    </div>
                    <div className="sche-list">
                        <div className="sche-scroll">
                            <div className="sche-list-board">

                            </div>
                        </div>
                    </div>
                </div>
                <div id='lecture-etc'>
                    <div>
                        to-do list
                    </div>
                    <div>
                        TIL
                    </div>
                    <div>
                        강의노트
                    </div>
                </div>
                
            </main>
    </div>
}

export default LectureNote;