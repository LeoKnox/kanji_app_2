import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Review = (test) => {
    const grades = useParams();
    const [quiz, setQuiz] = useState([]);
    const [allKanji, setAllKanji] = useState([]);

    useEffect(() => {
        const x = `http://127.0.0.1:8000/quiz/${grades.id}`;
        axios.get(x)
            .then(function (response) {
                setAllKanji(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function check() {
                const quizList = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
                setQuiz(quizList);
                //ans = quizList[Math.floor(Math.random()*quizList.length)];
                console.log(quizList);
            })
        }, [grades.id]);

        function red() {
            console.log("red");
        }

    return (
        <div className="indexWrapper">
        {quiz.map((i) => (
            <p className="kanjiCube">{i.kanji}</p>
        ))}
        </div>
    )
}

export default Review;