import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MainPage.css'
import Diary from './Diary'

function MainPage() {

    const [diary, setDiary] = useState([
        { date: '2023-05-16', content: '종강 언제하지' },
        { date: '2023-05-05', content: '오늘은 어린이날 학교 안갔당' },
        { date: '2023-04-28', content: '중간고사 언제끝나' }
    ]);

        const [tempEntry, setTempEntry] = useState({ date: '', content: '' });

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
                                        <li class="is--active">메인 프로젝트</li>
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

            <div class="main-banner-comp">
                <div class="main-banner-inner">
                    <div class="title-area">title-area</div>
                    <div class="desc-area">desc-area</div>
                    <div class="bg-area">bg-area</div>
                </div>
            </div>

            <div class="apply-grid-system">
                <div class="content-comp side-menu">
                    <div class="content-inner">
                        {/* <div class="grid-container"> */}
                            {/* <div class="nav-grid-wrapper">네비게이션 바</div> */}
                            <div class="content-area">
                                {/* <div class="head-wrap">content wrap</div> */}
                                <div class="item-title-area">나의 강의 노트</div>
                                <div class="lecture-note-area">
                                    <Link to="/LectureNote">
                                        <div class="lecture">lecture</div>    
                                    </Link>
                                    <div class="lecture">lecture</div>
                                    <div class="lecture">lecture</div>
                                    <div class="lecture">lecture</div>    
                                    {/* <div class="lecture">lecture</div>
                                    <div class="lecture">lecture</div> */}
                                    {/* lecture flex에서 inline 이후 넘어가는거 적용하기 */}
                                </div>
                                content-area
                            </div>
                            <div class="side-area">
                                <div class="diary-large-area">today's diary
                                    <div class="diary-area">
                                        <div class="input-area">
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
                                <div class="vocab-area">voca book
                                    <div class="voca"></div>
                                </div>
                                side-area
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            <div class="modal-overlay"></div>
        </div>
    )
}

export default MainPage;