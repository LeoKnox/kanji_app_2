import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

const Index = () => {
    //const numbers = [1, 2, 3, 4];
    const [numbers, setNumbers] = useState([]);
    const [grades, setGrades] = useState([]);

    function setGrade(e) {
        let gradeArray = grades;
        gradeArray[e.target.value] = e.target.checked;
        setGrades(gradeArray);
        console.log(grades);
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/g/') 
            .then(function (response) {
                let beginGrades = [];
                response.data.map((i) => beginGrades.push(i.grade));
                console.log(beginGrades);
                setNumbers(beginGrades);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <>
        <h1>Index</h1>
        <div id="horz-list">
            <ul>
                {numbers.map((number, index) => (
                    <li>
                        <input type="checkbox" value={index} onClick={setGrade} />
                        {number}
                    </li>
                ))}
            </ul>
        </div>
        <Outlet />
        </>
    )
}

export default Index;