import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Index = () => {
    const numbers = [1, 2, 3, 4];
    const [grades, setGrades] = useState([]);

    function setGrade(e) {
        console.log(e.target.value);
    }

    return (
        <>
        <h1>Index</h1>
        <div id="horz-list">
            <ul>
                {numbers.map((number) => (
                    <li>
                        <input type="checkbox" value={number} onClick={setGrade} />
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