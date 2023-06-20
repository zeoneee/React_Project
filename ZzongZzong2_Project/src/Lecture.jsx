import './Lecture.css'
import {Link} from "react-router-dom";

function Lecture({subject}) {

    return (
        <>
            <div>
                <Link to="/LectureNote">
                    <div className="lecture">
                        <div className='lectureImg'>
                        </div>
                        <div className='subject' key={subject}>
                            {subject}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Lecture;