import './Voca.css'
import dummy from './db/dummy.json'

function getRandomWords() {
    const shuffledWord = dummy.words.sort(() => Math.random() - 0.5);

    return shuffledWord.slice(0, 5);
}

function Voca() {
    const shuffledWord = getRandomWords();

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
                                {shuffledWord.map(word => (
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