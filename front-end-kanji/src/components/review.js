import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Review = (test) => {
    const grades = useParams();
    const [quiz, setQuiz] = useState([]);
    const [allKanji, setAllKanji] = useState([]);
    const [answer, setAnswer] = useState("one");

    useEffect(() => {
        const x = `http://127.0.0.1:8000/quiz/${grades.id}`;
        let y = axios.get(x)
            .then(function (response) {
                setAllKanji(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function check() {
                red();
                newAnswer();
                //const quizList = allKanji.sort(() => Math.random() - 1.5).slice(0,6);
                //setQuiz(quizList);
                //ans = quizList[Math.floor(Math.random()*quizList.length)];
            })
            .then(function () {
                console.log("next"+quiz);
            })
        console.log('y' + y);
        }, [answer]);

        function newAnswer() {
                const quizList = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
                setQuiz(quizList);
        }

        function red() {
            console.log("red");
        }

    return (
        <>
        <h1 class="answer">{answer}</h1>
        <div className="indexWrapper">
        {quiz.map((i) => (
            <button className="kanjiCube" onClick={newAnswer}>{i.kanji}</button>
        ))}
        </div>
        </>
    )
}

export default Review;