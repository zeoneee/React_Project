import './Lecture.css'
import { Link } from "react-router-dom";

function Lecture({ subject }){

    return(
    <>
        <div>
            <Link to='/LectureNote'
                state= {{ key: {subject} }}
                >
                <div className="lecture">
                    <div className='lectureImg'>
                    </div>
                    <div className='subject'> 
                        {subject}
                    </div>
                </div>    
            </Link>
        </div>
    </>
    );
}

export default Lecture;