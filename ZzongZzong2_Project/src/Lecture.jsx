import './Lecture.css'
import { Link } from "react-router-dom";

function Lecture({subject}){

    return(
    <>
        <div>
            <Link to="/LectureNote">
                <div class="lecture">lecture</div>    
            </Link>
            <div className='subject'> 
                <h3>{subject}</h3>
            </div>
        </div>
    </>
    );
}

export default Lecture;