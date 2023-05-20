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
                                <li>
                                    <label for="inputClassName">교과목명 :</label>
                                    <input type="text" id="inputClassName"/>
                                </li>
                                <li>
                                    <label for="inputClassCode">학수번호 :</label>
                                    <input type="text" id="inputClassCode"/>
                                </li>
                                <li>
                                    <label for="inputClassProfName">담당교수 :</label>
                                    <input type="text" id="inputClassProfName"/>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <label for="inputClassLoca">강의실 :</label>
                                    <input type="text" id="inputClassLoca"/>
                                </li>
                                <li>
                                    <label for="inputClassTime">강의시간 :</label>
                                    <input type="text" id="inputClassTime"/>
                                </li>
                                <li>
                                    <label for="inputClassProfEmail">이메일 :</label>
                                    <input type="text" id="inputClassProfEmail"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="lecture-team-schedule">
                    <div className="sche-title">
                        팀 스케줄 
                    </div>
                    <div className="sche-list">
                        <div className="sche-list-board">
                            <div id="sche-board-group01">
                                예정<br/>예정<br/>예정<br/>예정<br/>예정<br/>예정<br/>예정<br/>예정<br/>예정
                            </div>
                            <div id="sche-board-group02">
                                진행 중
                            </div>
                            <div id="sche-board-group03">
                                완료
                            </div>
                        </div>
                    </div>
                </div>
                <div id='lecture-etc'>
                    <div className="etc-col">
                        <div id="etc-toDoList">
                            to-do list
                        </div>
                        <div id="etc-TIL">
                            TIL
                        </div>
                    </div>
                    <div className="etc-row">
                        <div id="etc-LectStudy">
                            강의노트
                        </div>
                    </div>
                </div>
            </main>
    </div>
}

export default LectureNote;