import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Index = () => {
    const numbers = [1, 2, 3, 4];
    const [grades, setGrades] = useState([]);

    function setGrade(e) {
        console.log(e.target.value);
        let gradeArray = grades;
        gradeArray[e.target.value] = e.target.checked;
        setGrades(gradeArray);
        console.log(grades);
    }

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