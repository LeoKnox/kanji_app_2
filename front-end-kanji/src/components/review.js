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
        axios.get(x)
            .then(function (response) {
                setAllKanji(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                newAnswer();
            })
        }, [grades.id]);

        function newAnswer(e) {
            console.log("id"+e.target.value);
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
            <button className="kanjiCube" value={i.id} onClick={newAnswer}>{i.kanji}</button>
        ))}
        </div>
        </>
    )
}

export default Review;