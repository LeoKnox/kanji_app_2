import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
    const grades = useParams();
    const [quiz, setQuiz] = useState([]);
    const [allKanji, setAllKanji] = useState([]);

    useEffect(() => {
        const x = `http://127.0.0.1:8000/quiz/${grades.id}`;
        console.log("+++++" + JSON.stringify(allKanji[3]));
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
                console.log(quiz);
                //ans = quizList[Math.floor(Math.random()*quizList.length)];
            })
        }, [grades.id]);

    console.log("****"+grades.id);

    return (
        <h3>now review</h3>
    )
}

export default Review;