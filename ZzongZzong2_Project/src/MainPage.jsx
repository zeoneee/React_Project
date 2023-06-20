import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MainPage.css';
import Diary from './Diary';
import Lecture from "./Lecture";
import Voca from "./Voca";
import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
    case "ADD_DIARY_ENTRY":
        return {
        ...state,
        diary: [action.payload, ...state.diary],
        tempEntry: { date: '', content: '' }
        };
    case "SET_ENTRY_CONTENT":
        return {
        ...state,
        tempEntry: { ...state.tempEntry, content: action.payload }
        };
    case "SET_LECTURE_SUBJECT":
        return {
        ...state,
        lecture: [...state.lecture, { subject: action.payload }],
        tempSubject: ''
        };
    case "SET_SUBJECT":
        return {
        ...state,
        tempSubject: action.payload
        };
    default:
        return state;
    }
};

const initialState = {
    diary: [
    { date: '2023-05-16', content: '네트워크 과제 이번주 수요일까지' },
    { date: '2023-05-05', content: '웹프 팀 회의 토요일 1시' },
    { date: '2023-04-28', content: '머신러닝 기출 복습하기' }
    ],
    tempEntry: { date: '', content: '' },
    lecture: [
    { subject: '웹 프로그래밍' },
    { subject: '컴퓨터 네트워킹' },
    { subject: '운영체제' },
    { subject: '캡스톤 디자인' }
    ],
    tempSubject: ''
};

function MainPage() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { diary, tempEntry, lecture, tempSubject } = state;

    const handleSetValue = () => {
        const currentDate = new Date();
        const dateString = currentDate.toISOString().slice(0, 10);
        const newEntry = { date: dateString, content: tempEntry.content };

        dispatch({ type: "ADD_DIARY_ENTRY", payload: newEntry });
    };

    const handleContentChange = (e) => {
        dispatch({ type: "SET_ENTRY_CONTENT", payload: e.target.value });
    };

    const handleSubjectChange = (e) => {
        dispatch({ type: "SET_SUBJECT", payload: e.target.value });
    };

    const handleSetLecture = () => {
        dispatch({ type: "SET_LECTURE_SUBJECT", payload: tempSubject });
    };

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
                                        <li id="is--active">메인 프로젝트</li>
                                    </Link>
                                    <Link to="/MemberPage">
                                        <li id="no--active">팀원 소개</li>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className="main-banner-comp">
                <div className="main-banner-inner">
                    <div className="title-area">
                        <h1>나만의 강의 노트 관리</h1>
                        <h2>zzong zzong과 함께하세요😽</h2>
                    </div>
                    <div className="desc-area">zzongzzong-react-project</div>
                    <div className="bg-area">
                        <img src="src/assets/donggukUniv.jpeg"/>
                    </div>
                </div>
            </div>

            <div className="all-content">
                <div className="content-comp">
                    <div className="content-inner">
                            <div className="content-area">
                                <div className="item-title-area">📚 나의 강의 노트</div>
                                <div className="lecture-note-area">
                                    {lecture.map((entry, index) => (
                                        <Lecture key={index} subject={entry.subject}/>
                                    ))}
                                </div>
                                <div className="addSubject">
                                    <input type="text" value={tempSubject} onChange={handleSubjectChange}/>
                                    <button id= "save" onClick={handleSetLecture}>과목 추가</button>
                                </div>
                            </div>
                            <div className="side-area">
                                <div className="diary-large-area">today's diary 📝
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
                                <div className="vocab-area">voca book 📒
                                    <div className="voca">
                                        <Voca />
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="modal-overlay"></div>
        </div>
    )
}

export default MainPage;