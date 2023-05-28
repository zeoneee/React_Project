import './Voca.css'
import dummy from './db/dummy.json'

function Voca() {
    return (
        <>
            <div className="voca">
                <div className="voca-title">
                    <h3>단어장</h3>
                </div>
                <div className="voca-list">
                    <div className="voca-scroll">
                        <div className="voca-list-board">
                            <table>
                                <tbody>
                                {dummy.words.map(word => (
                                    <tr key={word.id}>
                                        <td>{word.eng}</td>
                                        <td>{word.kor}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Voca;