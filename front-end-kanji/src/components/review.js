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
                let translations = quizList[pick].reading + " : " + quizList[pick].pronounciation;
                setAnswer([quizList[pick].meaning, quizList[pick].idkanji_dict, translations]);
                setQuiz(quizList);
                console.log (quiz);
            })
            .catch(function (error) {
                console.log(error);
            })
        }, [grades.id]);

        function test() {
        }

        function newAnswer(e) {
            if (answer[1] == e.target.value) {
                const quizList = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
                let pick = Math.floor(Math.random()*quizList.length);
                let translations = quizList[pick].reading + " : " + quizList[pick].pronounciation;
                setTranslation(answer[2]);
                setTimeout(() => {
                    setAnswer([quizList[pick].meaning, quizList[pick].idkanji_dict, translations]);
                    setQuiz(quizList);
                    setTranslation("?");
                }, 5000);
                console.log("blue");
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