import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Index = () => {
    //const numbers = [1, 2, 3, 4];
    const [numbers, setNumbers] = useState([]);
    const [grades, setGrades] = useState([]);
    const navigate = useNavigate();

    function SetGrade(e) {
        let gradeArray = grades;
        gradeArray[e.target.value] = e.target.checked;
        setGrades(gradeArray);
        navigate(`/index/review/1`);
        console.log(grades);
    }

    // FUTURE change axios call to return array not array of objects
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/g/') 
            .then(function (response) {
                let beginGrades = [];
                response.data.map((i) => beginGrades.push(i.grade));
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
                        <input type="checkbox" value={index} onClick={SetGrade} />
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