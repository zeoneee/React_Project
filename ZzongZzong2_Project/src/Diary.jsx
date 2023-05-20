import './Diary.css'

function Diary({date,content}){

    return(
    <>
        <div className="date">
            {date}
        </div>
        <div className='content'>
            {content}
        </div>
    </>
    );
}

export default Diary;