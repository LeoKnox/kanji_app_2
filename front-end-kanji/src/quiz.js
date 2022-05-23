import { useState, useEffect } from 'react';
import axios from 'axios';

let allKanji = [];
let ans = '';

const KanjiMap = (grades) => {
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        console.log(grades.grades);
        const x = `http://127.0.0.1:8000/quiz/${grades.grades}`;
        axios.get(x)
            .then(function (response) {
                allKanji = response.data;
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function check() {
                const quizList = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
                setQuiz(quizList);
                ans = quizList[Math.floor(Math.random()*quizList.length)];
            })

        }, []);

    function check(answer) {
        if (answer === ans.meaning) {
            const pronounciation = document.getElementById("showAnswer");
            pronounciation.append("Reading: " + ans.reading + " | Pronounciation: " + ans.pronounciation);
            setTimeout( ()=> {
                const newQuiz = allKanji.sort(() => Math.random() - 0.5).slice(0,6);
                setQuiz(newQuiz);
                ans = newQuiz[Math.floor(Math.random()*newQuiz.length)];
                console.log("Right!");
                pronounciation.innerHTML = "";
            }, 3000);
        } else {
            console.log("wrong");
        }
    }

    return (
        <>
        <div className="answer">
            <h3 id="showAnswer"></h3>
            <h1 >Answer: {ans.meaning}</h1>
        </div>
        <div className="kanjiWrapper">
            {quiz.map((k, i) => (
                <p key={i} onClick={() => check(k.meaning)} className="kanjiCube">{k.kanji}</p>
            ))}
        </div>
        </>
    )
};

export default KanjiMap;