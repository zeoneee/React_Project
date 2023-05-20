import './Diary.css'

function Diary({date,contents}){

    return(
    <>
        <div className="date">
            {date}
        </div>
        <div className='content'>
            {contents}
        </div>
    </>
    );
}

export default Diary;