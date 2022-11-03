import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
    const grades = useParams();
    const [quiz, setQuiz] = useState([]);
    const [allKanji, setAllKanji] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [translation, setTranslation] = useState("?");

    useEffect(() => {
        const gradeLink = `http://127.0.0.1:8000/quiz/${grades.id}`;
        axios.get(gradeLink)
            .then(function (response) {
                setAllKanji(response.data);
                const quizList = response.data.sort(() => Math.random() - 0.5).slice(0,6);
                let pick = Math.floor(Math.random()*quizList.length);
                setAnswer([quizList[pick].meaning, quizList[pick].idkanji_dict]);
                setQuiz(quizList);
            })
            .catch(function (error) {
                console.log(error);
            })
        }, [grades.id]);

        function newAnswer(e) {
            if ((e === undefined) || (answer[1] == e.target.value)) {
                let translations = quizList[pick].reading + " : " + quizList[pick].pronounciation;
                setAnswer([quizList[pick].meaning, quizList[pick].idkanji_dict, translations]);
                setTranslation(answer[2]);
                console.log(`1st ${answer[2]}`);
                const quizList = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
                let pick = Math.floor(Math.random()*quizList.length);
                console.log(`qL ${quizList[pick]}`);
                console.log(`2nd ${answer[2]}`);
                setQuiz(quizList);
                setTimeout(function() {
                    setTranslation("?");
                    console.log("tra"+translations);
                }, 5000);
            }
        }

    return (
        <>
        <h1 className="answer">{answer[0]}</h1>
        <h2 className="answer">{translation}</h2>
        <div className="indexWrapper">
        {quiz.map((i) => (
            <button className="kanjiCube" value={i.idkanji_dict} onClick={newAnswer}>{i.kanji}</button>
        ))}
        </div>
        </>
    )
}

export default Review;