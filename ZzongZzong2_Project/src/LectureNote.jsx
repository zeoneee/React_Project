import React, { useReducer } from "react";
import { useLocation } from "react-router-dom";
import './LectureNote.css'
import TodoList from './components/ToDoList'
import Diary from "./Diary";
import lectureDB from './db/lecture.json'


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
    };
}

const initialState = {
    diary: {date: '2023-06-08', content: '웹프 기말고사'},
    TIL : {},
    tempEntry: { date: '', content: '' },
    LectStudy: {}
}

function LectureNote(){
    const [state, dispatch] = useReducer(reducer, initialState);
    const {diary, TIL, tempEntry, LectStudy} = state;
    const location = useLocation();
    const key = location.state.key;
    const handleSetValue = () => {
        const currentDate = new Date();
        const dateString = currentDate.toISOString().slice(0, 10);
        const newEntry = { date: dateString, content: tempEntry.content };

        dispatch({ type: "ADD_DIARY_ENTRY", payload: newEntry });
    };
    const handleContentChange = (e) => {
        dispatch({ type: "SET_ENTRY_CONTENT", payload: e.target.value });
    };
    var newInfo;
    for(var i=0; i<4; i++){
        if(key["subject"] === lectureDB['lect-info'][i]["lecture"])
        {
            newInfo = JSON.parse(JSON.stringify(lectureDB["lect-info"][i]));
        }
    }
    console.log(newInfo);
    return (
    <div id="lecture">
        <main className="lecture-main"> 
            <div id="lecture-info">
                <div id="lec-title">{ key["subject"] }</div>
                <div id="lec-info">
                    <div>
                        <ul>
                            <li>
                                <label htmlFor="inputClassName">교과목명 :</label>
                                <input type="text" id="inputClassName" value={newInfo["lecture"]}/>
                            </li>
                            <li>
                                <label htmlFor="inputClassCode">학수번호 :</label>
                                <input type="text" id="inputClassCode" value={newInfo["lect-num"]}/>
                            </li>
                            <li>
                                <label htmlFor="inputClassProfName">담당교수 :</label>
                                <input type="text" id="inputClassProfName" value={newInfo["lect-prof"]}/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <label htmlFor="inputClassLoca">강의실 :</label>
                                <input type="text" id="inputClassLoca" value={newInfo["location"]}/>
                            </li>
                            <li>
                                <label htmlFor="inputClassTime">강의시간 :</label>
                                <input type="text" id="inputClassTime" value={newInfo["lect-time"]}/>
                            </li>
                            <li>
                                <label htmlFor="inputClassProfEmail">이메일 :</label>
                                <input type="text" id="inputClassProfEmail" value={newInfo["prof-email"]}/>
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
            </div>
            <div id='lecture-etc'>
                <div className="etc-col">
                    <div id="etc-toDoList">
                        ToDoList
                        {/* {diary.map((entry, index) => (
                            <Diary key={index} date={entry.date} content={entry.content} />
                        ))} */}
                        <br/>
                        <div id="input-toDoList">
                            <textarea
                                id="contentInput"
                                placeholder="여기에 입력하세요"
                                value={tempEntry.content}
                                onChange={handleContentChange}
                            ></textarea>
                            <button id = "save" onClick={handleSetValue}>save</button>
                        </div>
                    </div>
                    <div id="etc-TIL">
                        TIL<br/>
                        <textarea
                                id="contentInput"
                                placeholder="여기에 입력하세요"
                                value={tempEntry.content}
                                onChange={handleContentChange}
                            ></textarea>
                            <button id = "save" onClick={handleSetValue}>save</button>
                    </div>
                </div>
                <div className="etc-row">
                    <div id="etc-LectStudy">
                        강의노트
                        <textarea
                                id="contentInput"
                                placeholder="여기에 입력하세요"
                                value={tempEntry.content}
                                onChange={handleContentChange}
                            ></textarea>
                            <button id = "save" onClick={handleSetValue}>save</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    )
}

export default LectureNote;