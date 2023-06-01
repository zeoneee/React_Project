import React from "react";
import './LectureNote.css'
import TodoList from './components/ToDoList'

function LectureNote(){


    return (
    <div id="lecture">
        <main className="lecture-main"> 
            <div id="lecture-info">
                <div id="lec-title">웹 프로그래밍</div>
                <div id="lec-info">
                    <div>
                        <ul>
                            <li>
                                <label htmlFor="inputClassName">교과목명 :</label>
                                <input type="text" id="inputClassName"/>
                            </li>
                            <li>
                                <label htmlFor="inputClassCode">학수번호 :</label>
                                <input type="text" id="inputClassCode"/>
                            </li>
                            <li>
                                <label htmlFor="inputClassProfName">담당교수 :</label>
                                <input type="text" id="inputClassProfName"/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <label htmlFor="inputClassLoca">강의실 :</label>
                                <input type="text" id="inputClassLoca"/>
                            </li>
                            <li>
                                <label htmlFor="inputClassTime">강의시간 :</label>
                                <input type="text" id="inputClassTime"/>
                            </li>
                            <li>
                                <label htmlFor="inputClassProfEmail">이메일 :</label>
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
                <TodoList />
                {/* <div className="sche-list">
                    <div className="sche-list-board">
                        <div id="sche-board-group01">
                            <div className="group-title">예정</div>
                            <ul>
                                <li>예정 리스트</li>
                                <li>예정 리스트</li>
                                <li>예정 리스트</li>
                            </ul>
                        </div>
                        <div id="sche-board-group02">
                            <div className="group-title">진행 중</div>
                            <ul>
                                <li>진행 중 리스트</li>
                                <li>진행 중 리스트</li>
                                <li>진행 중 리스트</li>
                            </ul>
                        </div>
                        <div id="sche-board-group03">
                            <div className="group-title">완료</div>
                            <ul>
                                <li>완료 리스트</li>
                                <li>완료 리스트</li>
                                <li>완료 리스트</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
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
    )
}

export default LectureNote;