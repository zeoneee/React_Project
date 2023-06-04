import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MainPage.css';
import Diary from './Diary';
import Lecture from "./Lecture";
import Voca from "./Voca";

function MainPage() {

    // diary component
    const [diary, setDiary] = useState([
        { date: '2023-05-16', content: '네트워크 과제 이번주 수요일까지' },
        { date: '2023-05-05', content: '웹프 팀 회의 토요일 1시' },
        { date: '2023-04-28', content: '머신러닝 기출 복습하기' }
    ]);

    const [tempEntry, setTempEntry] = useState({ date: '', content: ''});
    const [tempSubject, setSubject] = useState('');

    const handleSetValue = () => {
        const currentDate = new Date();
        const dateString = currentDate.toISOString().slice(0, 10);
        const newEntry = { date: dateString, content: tempEntry.content };

        setDiary((prevDiary) => [newEntry, ...prevDiary ]);
        setTempEntry({ date: '', content: '' });
    };

    const handleContentChange = (e) => {
        setTempEntry((prevEntry) => ({ ...prevEntry, content: e.target.value }));
    };

    // lecture note component
    const [lecture, setLecture] = useState([
        {subject: '웹 프로그래밍'},
        {subject: '컴퓨터 네트워킹'},
        {subject: '운영체제'},
        {subject: '캡스톤 디자인'},
    ])

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleSetLecture = () => {
        const newLecture = [...lecture, { subject: tempSubject }];
        setLecture(newLecture);
        handleSubjectChange('');
    };

    return (
        <div id="app">
            {/* <header class="header-comp">
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
                                        <li class="is--active">메인 프로젝트</li>
                                    </Link>
                                    <Link to="/MemberPage">
                                        <li>팀원 소개</li>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                     <div tabindex="-1" class="sub-menu-area">
                        <div class="sub-menu">sub-menu</div>
                    </div> 
                </div>
            </header> */}

            <div className="main-banner-comp">
                <div className="main-banner-inner">
                    <div className="title-area">title-area</div>
                    <div className="desc-area">desc-area</div>
                    <div className="bg-area">bg-area</div>
                </div>
            </div>

            <div className="apply-grid-system">
                <div className="content-comp side-menu">
                    <div className="content-inner">
                            <div className="content-area">
                                <div className="item-title-area">나의 강의 노트</div>
                                <div className="lecture-note-area">
                                    {lecture.map((entry, index) => (
                                        <Lecture key={index} subject={entry.subject}/>
                                    ))}
                                    {/* lecture flex에서 inline 이후 넘어가는거 적용하기 */}
                                </div>
                                <div className="addSubject">
                                    <input type="text" value={tempSubject} onChange={handleSubjectChange}/>
                                    <button id= "save" onClick={handleSetLecture}>과목 추가</button>
                                </div>

                                <p>content-area</p>
                            </div>
                            <div className="side-area">
                                <div className="diary-large-area">today's diary
                                    <div className="diary-area">
                                        <div className="input-area">
                                            <textarea
                                                id="contentInput"
                                                placeholder="여기에 입력하세요"
                                                value={tempEntry.content}
                                                onChange={handleContentChange}
                                            ></textarea>
                                            <button id = "save" onClick={handleSetValue}>save</button>
                                        </div>
                                        {diary.map((entry, index) => (
                                            <Diary key={index} date={entry.date} content={entry.content} />
                                        ))}
                                    </div>
                                </div>
                                <div className="vocab-area">voca book
                                    <div className="voca">
                                        <Voca />
                                    </div>
                                </div>
                                side-area
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <div className="modal-overlay"></div>
        </div>
    )
}

export default MainPage;